import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ImagePlus, Loader2, Search, Send, X } from "lucide-react";

import usePost from "../../hooks/usePost";
import { searchCreatorsAndUsers } from "../../services/creator.api";

// Instagram-style aspect ratios
const ASPECT_RATIOS = [
  { id: "1:1", label: "Square", hint: "1:1", value: 1 },
  { id: "4:5", label: "Portrait", hint: "4:5", value: 4 / 5 },
  { id: "1.91:1", label: "Landscape", hint: "1.91:1", value: 1.91 },
];

// Instagram accepts images between 4:5 (0.8) and 1.91:1
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MIN_RATIO = 0.8;
const MAX_RATIO = 1.91;

const getInitials = (name) => {
  if (!name || typeof name !== "string") return "U";

  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const CreatePost = ({ onPostCreated, currentUserId }) => {
  const { create } = usePost();

  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef(null);
  // "idle" | "loading" | "loaded" | "error"
  const [imageStatus, setImageStatus] = useState("idle");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [outOfRange, setOutOfRange] = useState(false);
  const [naturalRatio, setNaturalRatio] = useState(null);

  const [tagQuery, setTagQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    creators: [],
    users: [],
  });
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const trimmedQuery = tagQuery.trim();

    if (trimmedQuery.length < 2) {
      setSearchResults({ creators: [], users: [] });
      setSearchError("");
      setSearching(false);
      return undefined;
    }

    let cancelled = false;

    const timer = setTimeout(async () => {
      try {
        setSearching(true);
        setSearchError("");

        const response = await searchCreatorsAndUsers(trimmedQuery);
        if (cancelled) return;

        setSearchResults({
          creators: response?.data?.creators || [],
          users: response?.data?.users || [],
        });
      } catch (err) {
        if (cancelled) return;

        setSearchResults({ creators: [], users: [] });
        setSearchError(
          err?.response?.data?.message || "Unable to search for people."
        );
      } finally {
        if (!cancelled) setSearching(false);
      }
    }, 350);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [tagQuery]);

  const suggestions = useMemo(() => {
    const people = [
      ...searchResults.creators.map((person) => ({
        ...person,
        accountType: person.accountType || "CREATOR",
        displayName: person.creator?.displayName || person.name,
      })),
      ...searchResults.users.map((person) => ({
        ...person,
        accountType: person.accountType || "NORMAL",
        displayName: person.name,
      })),
    ];

    const selectedIds = new Set(selectedUsers.map((person) => person.id));

    return people.filter(
      (person, index, list) =>
        person.id &&
        person.id !== currentUserId &&
        !selectedIds.has(person.id) &&
        list.findIndex((item) => item.id === person.id) === index
    );
  }, [searchResults, selectedUsers, currentUserId]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const activeRatio =
    ASPECT_RATIOS.find((ratio) => ratio.id === aspectRatio) || ASPECT_RATIOS[0];

  const resetImage = () => {
    setImageFile(null);
    setPreviewUrl("");
    setImageStatus("idle");
    setAspectRatio("1:1");
    setOutOfRange(false);
    setNaturalRatio(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError("");
    setSuccess("");

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      resetImage();
      setError("Only JPG, PNG or WEBP images are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      resetImage();
      setError("Image must be 10 MB or smaller.");
      return;
    }

    setOutOfRange(false);
    setNaturalRatio(null);
    setImageStatus("loading");
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (!naturalWidth || !naturalHeight) {
      setImageStatus("error");
      return;
    }

    const ratio = naturalWidth / naturalHeight;
    setNaturalRatio(ratio);
    setImageStatus("loaded");

    if (ratio < MIN_RATIO) {
      // Too tall -> force the closest allowed ratio (4:5)
      setOutOfRange(true);
      setAspectRatio("4:5");
    } else if (ratio > MAX_RATIO) {
      // Too wide -> force the closest allowed ratio (1.91:1)
      setOutOfRange(true);
      setAspectRatio("1.91:1");
    } else {
      setOutOfRange(false);
      // Pick the closest Instagram ratio by default
      const closest = ASPECT_RATIOS.reduce((best, current) =>
        Math.abs(current.value - ratio) < Math.abs(best.value - ratio)
          ? current
          : best
      );
      setAspectRatio(closest.id);
    }
  };

  const handleSelectUser = (person) => {
    setSelectedUsers((previous) =>
      previous.some((selected) => selected.id === person.id)
        ? previous
        : [...previous, person]
    );
    setTagQuery("");
    setSearchResults({ creators: [], users: [] });
    setShowSuggestions(false);
    setSearchError("");
  };

  const handleRemoveUser = (userId) => {
    setSelectedUsers((previous) =>
      previous.filter((person) => person.id !== userId)
    );
  };

  const hasValidImage = Boolean(imageFile) && imageStatus === "loaded";
  const canSubmit = !submitting && hasValidImage && Boolean(content.trim());

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!imageFile) {
      setError("An image is required to publish a post.");
      return;
    }

    if (imageStatus === "loading") {
      setError("Please wait for the image to finish loading.");
      return;
    }

    if (imageStatus !== "loaded") {
      setError("The image could not be read. Please choose another file.");
      return;
    }

    if (!content.trim()) {
      setError("Write a caption before publishing.");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("image", imageFile); // field name must match multer
      formData.append("content", content.trim());
      formData.append("aspectRatio", aspectRatio); // "1:1" | "4:5" | "1.91:1"
      formData.append(
        "taggedUserIds",
        JSON.stringify(selectedUsers.map((person) => person.id))
      );

      const response = await create(formData);

      onPostCreated?.(response?.data?.post);

      setContent("");
      resetImage();
      setTagQuery("");
      setSelectedUsers([]);
      setSearchResults({ creators: [], users: [] });
      setSuccess("Your post has been published. Tag requests have been sent.");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Unable to publish your post."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rounded-3xl border border-black/[0.07] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-950">Caption</h2>
        <p className="mt-1 text-sm text-gray-400">
          Add an image and write a caption for your post.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Image (required) */}
        <label
          htmlFor="post-image"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Image <span className="text-red-500">*</span>
        </label>
        <input
          ref={fileInputRef}
          id="post-image"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="sr-only"
        />

        {!imageFile ? (
          <label
            htmlFor="post-image"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-10 text-center transition hover:border-indigo-300 hover:bg-indigo-50/40"
          >
            <ImagePlus size={26} className="text-gray-400" />
            <span className="text-sm font-semibold text-gray-700">
              Choose an image
            </span>
            <span className="text-xs text-gray-400">
              JPG, PNG or WEBP, up to 10 MB
            </span>
          </label>
        ) : (
          <div>
            <div className="mb-2 flex items-center justify-between gap-3 text-xs text-gray-500">
              <span className="min-w-0 truncate">{imageFile.name}</span>
              <button
                type="button"
                onClick={resetImage}
                className="inline-flex shrink-0 items-center gap-1 font-medium text-gray-500 hover:text-gray-800"
              >
                <X size={14} /> Remove
              </button>
            </div>

            <div
              className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
              style={{ aspectRatio: activeRatio.value }}
            >
              <img
                src={previewUrl}
                alt="Image preview"
                className="h-full w-full object-cover"
                onLoad={handleImageLoad}
                onError={() => setImageStatus("error")}
              />
            </div>

            {imageStatus === "error" && (
              <p role="alert" className="mt-2 text-sm text-red-600">
                This file could not be read as an image.
              </p>
            )}

            {imageStatus === "loaded" && (
              <div className="mt-3">
                {outOfRange && (
                  <p className="mb-2 text-xs text-amber-600">
                    This image is outside the supported size
                    {naturalRatio ? ` (${naturalRatio.toFixed(2)}:1)` : ""}. It
                    has been fitted to {aspectRatio} — you can pick another
                    ratio below.
                  </p>
                )}
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Aspect ratio
                </p>
                <div className="flex flex-wrap gap-2">
                  {ASPECT_RATIOS.map((ratio) => (
                    <button
                      key={ratio.id}
                      type="button"
                      onClick={() => setAspectRatio(ratio.id)}
                      aria-pressed={aspectRatio === ratio.id}
                      className={`rounded-xl border px-3.5 py-2 text-sm transition ${
                        aspectRatio === ratio.id
                          ? "border-indigo-300 bg-indigo-50 font-semibold text-indigo-700"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {ratio.label}{" "}
                      <span className="text-xs text-gray-400">
                        {ratio.hint}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Caption */}
        <label
          htmlFor="post-caption"
          className="mb-2 mt-5 block text-sm font-semibold text-gray-700"
        >
          Caption
        </label>
        <textarea
          id="post-caption"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Write a caption..."
          rows={4}
          maxLength={5000}
          className="w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
        />

        <div className="mt-4">
          <label
            htmlFor="post-tag-search"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Tag people
          </label>

          {selectedUsers.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {selectedUsers.map((person) => (
                <span
                  key={person.id}
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 py-1 pl-1 pr-2 text-sm text-indigo-700"
                >
                  <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white text-[10px] font-bold text-indigo-700">
                    {person.profileImage ? (
                      <img
                        src={person.profileImage}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      getInitials(person.displayName || person.name)
                    )}
                  </span>
                  <span className="max-w-[160px] truncate">
                    {person.displayName || person.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveUser(person.id)}
                    aria-label={`Remove ${person.displayName || person.name}`}
                    className="rounded-full p-0.5 transition hover:bg-indigo-100"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="relative">
            <Search
              size={17}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              id="post-tag-search"
              type="text"
              value={tagQuery}
              onFocus={() => setShowSuggestions(true)}
              onChange={(event) => {
                setTagQuery(event.target.value);
                setShowSuggestions(true);
              }}
              placeholder="Search by name or username..."
              autoComplete="off"
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50"
            />
            {searching && (
              <Loader2
                size={17}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 animate-spin text-indigo-500"
              />
            )}

            {showSuggestions && tagQuery.trim().length >= 2 && (
              <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-gray-200 bg-white py-2 shadow-xl">
                {searching ? (
                  <div className="flex items-center justify-center gap-2 px-4 py-5 text-sm text-gray-400">
                    <Loader2 size={16} className="animate-spin" />
                    Searching people...
                  </div>
                ) : searchError ? (
                  <p className="px-4 py-4 text-sm text-red-600">
                    {searchError}
                  </p>
                ) : suggestions.length > 0 ? (
                  suggestions.map((person) => (
                    <button
                      key={person.id}
                      type="button"
                      onClick={() => handleSelectUser(person)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-indigo-50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                        {person.profileImage ? (
                          <img
                            src={person.profileImage}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          getInitials(person.displayName || person.name)
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-gray-900">
                          {person.displayName || person.name}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-gray-500">
                          @{person.username}
                        </span>
                      </span>
                      <span className="shrink-0 rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-500">
                        {person.accountType === "CREATOR" ? "Creator" : "Person"}
                      </span>
                      <Check size={16} className="shrink-0 text-indigo-500" />
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-4 text-sm text-gray-500">
                    No matching people found.
                  </p>
                )}
              </div>
            )}
          </div>

          <p className="mt-2 text-xs text-gray-400">
            Search by name or username, then select people to tag. They must
            accept your tag request before the post appears as tagged.
          </p>
          {showSuggestions && (
            <button
              type="button"
              onClick={() => setShowSuggestions(false)}
              className="mt-2 text-xs font-medium text-gray-500 hover:text-gray-800"
            >
              Close search results
            </button>
          )}
        </div>

        {error && (
          <p role="alert" className="mt-3 text-sm text-red-600">{error}</p>
        )}
        {success && (
          <p role="status" className="mt-3 text-sm text-green-600">{success}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">{content.length}/5000</span>
          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={15} />
            )}
            {submitting ? "Publishing..." : "Publish post"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;