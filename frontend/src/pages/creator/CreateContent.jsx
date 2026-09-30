
import { useEffect, useState } from "react";
import { ArrowLeft, FileText, Image, Loader2, Play, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { createContent } from "../../services/content.api";
import { getGenres } from "../../services/genre.api";
import { useAuth } from "../../hooks/useAuth";

const contentTypes = [
  {
    value: "ARTICLE",
    label: "Article",
    icon: FileText,
    description: "Share knowledge through written content.",
  },
  {
    value: "IMAGE",
    label: "Image",
    icon: Image,
    description: "Share an image with your audience.",
  },
  {
    value: "VIDEO",
    label: "Video",
    icon: Play,
    description: "Share an externally hosted video.",
  },
];

const CreateContent = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    body: "",
    type: "ARTICLE",
    externalUrl: "",
    mediaUrl: "",
    genreId: "",
  });

  useEffect(() => {
    const loadGenres = async () => {
      try {
        setLoadingGenres(true);

        const response = await getGenres();

        setGenres(response?.data?.genres || []);
      } catch (error) {
        console.error("GENRES ERROR:", error);

        setError(
          error?.response?.data?.message ||
            "Unable to load genres."
        );
      } finally {
        setLoadingGenres(false);
      }
    };

    loadGenres();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleTypeChange = (type) => {
    setForm((previous) => ({
      ...previous,
      type,
      body: type === "ARTICLE" ? previous.body : "",
      externalUrl: type === "VIDEO" ? previous.externalUrl : "",
      mediaUrl: type === "IMAGE" ? previous.mediaUrl : "",
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    if (!form.genreId) {
      setError("Please select a genre.");
      return;
    }

    if (form.type === "ARTICLE" && !form.body.trim()) {
      setError("Article content is required.");
      return;
    }

    if (form.type === "IMAGE" && !form.mediaUrl.trim()) {
      setError("Image URL is required.");
      return;
    }

    if (form.type === "VIDEO" && !form.externalUrl.trim()) {
      setError("Video URL is required.");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        title: form.title.trim(),
        type: form.type,
        genreId: form.genreId,
      };

      if (form.description.trim()) {
        payload.description = form.description.trim();
      }

      if (form.type === "ARTICLE") {
        payload.body = form.body.trim();
      }

      if (form.type === "IMAGE") {
        payload.mediaUrl = form.mediaUrl.trim();
      }

      if (form.type === "VIDEO") {
        payload.externalUrl = form.externalUrl.trim();
      }

      console.log("CREATE CONTENT PAYLOAD:", payload);

      await createContent(payload);

      setSuccess("Content published successfully.");

      setForm({
        title: "",
        description: "",
        body: "",
        type: "ARTICLE",
        externalUrl: "",
        mediaUrl: "",
        genreId: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (error) {
      console.error("CREATE CONTENT ERROR:", error);

      setError(
        error?.response?.data?.message ||
          "Unable to publish content."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (user?.accountType !== "CREATOR") {
    return (
      <div className="min-h-screen bg-[#f7f7f8] px-5 py-10">
        <div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center">
          <div className="w-full rounded-3xl border border-black/[0.06] bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
              <FileText size={24} className="text-gray-500" />
            </div>

            <h1 className="mt-5 text-2xl font-black text-gray-950">
              Creator access required
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Only creator accounts can publish content on YOUVYX.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-6 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Back to feed
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-[#f7f7f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-white hover:text-gray-950"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="text-xl font-black tracking-tight text-gray-950">
            YOUVYX
          </div>

          <div className="w-[72px]" />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Page heading */}
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">
            Creator Studio
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Create something useful.
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-500">
            Share knowledge, ideas and productive content with the YOUVYX
            community.
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Content type */}
          <section className="rounded-3xl border border-black/[0.06] bg-white p-5 shadow-sm sm:p-7">
            <div>
              <h2 className="text-lg font-bold text-gray-950">
                Content type
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Choose what you want to publish.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {contentTypes.map((item) => {
                const Icon = item.icon;
                const active = form.type === item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleTypeChange(item.value)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        active
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon size={19} />
                    </div>

                    <p className="mt-3 text-sm font-bold text-gray-950">
                      {item.label}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Basic information */}
          <section className="mt-6 rounded-3xl border border-black/[0.06] bg-white p-5 shadow-sm sm:p-7">
            <div>
              <h2 className="text-lg font-bold text-gray-950">
                Basic information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Give your content a clear title and category.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter a meaningful title..."
                  maxLength={200}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />

                <div className="mt-1 flex justify-end">
                  <span className="text-xs text-gray-400">
                    {form.title.length}/200
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Short description
                  <span className="ml-1 font-normal text-gray-400">
                    (optional)
                  </span>
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Give readers a quick idea of what this content is about..."
                  rows={3}
                  maxLength={1000}
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />

                <div className="mt-1 flex justify-end">
                  <span className="text-xs text-gray-400">
                    {form.description.length}/1000
                  </span>
                </div>
              </div>

              {/* Genre */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Genre
                </label>

                {loadingGenres ? (
                  <div className="flex h-[52px] items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-500">
                    <Loader2 size={17} className="animate-spin" />
                    Loading genres...
                  </div>
                ) : (
                  <select
                    name="genreId"
                    value={form.genreId}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-950 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  >
                    <option value="">Select a genre</option>

                    {genres.map((genre) => (
                      <option key={genre.id} value={genre.id}>
                        {genre.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="mt-6 rounded-3xl border border-black/[0.06] bg-white p-5 shadow-sm sm:p-7">
            <div>
              <h2 className="text-lg font-bold text-gray-950">
                {form.type === "ARTICLE"
                  ? "Article content"
                  : form.type === "IMAGE"
                  ? "Image"
                  : "Video"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {form.type === "ARTICLE"
                  ? "Write the main content of your article."
                  : form.type === "IMAGE"
                  ? "Provide the URL of the image."
                  : "Provide the URL of your externally hosted video."}
              </p>
            </div>

            <div className="mt-6">
              {form.type === "ARTICLE" && (
                <textarea
                  name="body"
                  value={form.body}
                  onChange={handleChange}
                  placeholder="Start writing your article..."
                  rows={16}
                  className="w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-[15px] leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              )}

              {form.type === "IMAGE" && (
                <div>
                  <input
                    type="url"
                    name="mediaUrl"
                    value={form.mediaUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />

                  {form.mediaUrl && (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                      <img
                        src={form.mediaUrl}
                        alt="Preview"
                        className="max-h-[420px] w-full object-contain"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}
                </div>
              )}

              {form.type === "VIDEO" && (
                <div>
                  <input
                    type="url"
                    name="externalUrl"
                    value={form.externalUrl}
                    onChange={handleChange}
                    placeholder="https://youtube.com/..."
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />

                  <div className="mt-4 rounded-2xl bg-gray-50 px-4 py-4">
                    <p className="text-xs leading-5 text-gray-500">
                      Video content currently uses an external URL. The
                      video will open on its hosting platform.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Publish */}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:text-gray-950"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting || loadingGenres}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Publish content
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateContent;

