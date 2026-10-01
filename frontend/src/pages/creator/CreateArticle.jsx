import { useEffect, useState } from "react";
import {
  ArrowLeft,
  FileText,
  Loader2,
  Upload,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { createArticle } from "../../services/content.api";
import { getGenres } from "../../services/genre.api";

const CreateArticle = () => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    genreId: "",
    body: "",
  });

  const [pdf, setPdf] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadGenres = async () => {
      try {
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

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlePdfChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("PDF must be smaller than 10 MB.");
      event.target.value = "";
      return;
    }

    setError("");
    setPdf(file);
  };

  const removePdf = () => {
    setPdf(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const hasBody = formData.body.trim().length > 0;
    const hasPdf = !!pdf;

    if (!hasBody && !hasPdf) {
      setError(
        "Add article content or upload a PDF before publishing."
      );
      return;
    }

    if (!formData.title.trim()) {
      setError("Title is required.");
      return;
    }

    if (!formData.subject.trim()) {
      setError("Subject is required.");
      return;
    }

    if (!formData.description.trim()) {
      setError("Description is required.");
      return;
    }

    if (!formData.genreId) {
      setError("Please select a genre.");
      return;
    }

    try {
      setPublishing(true);

      const data = new FormData();

      data.append("title", formData.title.trim());
      data.append("subject", formData.subject.trim());
      data.append(
        "description",
        formData.description.trim()
      );
      data.append("genreId", formData.genreId);

      if (hasBody) {
        data.append("body", formData.body.trim());
      }

      if (hasPdf) {
        data.append("pdf", pdf);
      }

      await createArticle(data);

      setSuccess("Article published successfully.");

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (error) {
      console.error("CREATE ARTICLE ERROR:", error);

      setError(
        error?.response?.data?.message ||
          "Unable to publish article."
      );
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-[#f7f7f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => navigate("/creator/create")}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950"
          >
            <ArrowLeft size={17} />
            Content Types
          </button>

          <div className="flex items-center gap-2 text-sm font-black text-gray-950">
            <FileText
              size={17}
              className="text-indigo-600"
            />
            Create Article
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
            Article
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-gray-950">
            Create your article
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Write an article, upload a PDF, or provide both.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-2xl border border-green-100 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
            {success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Basic information */}

          <section className="rounded-3xl border border-black/[0.07] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-black text-gray-950">
                Article information
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Give your article a clear identity.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Title <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter article title"
                  maxLength={200}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Subject <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this article about?"
                  maxLength={200}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Description{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write a short description..."
                  maxLength={1000}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Genre <span className="text-red-500">*</span>
                </label>

                <select
                  name="genreId"
                  value={formData.genreId}
                  onChange={handleChange}
                  disabled={loadingGenres}
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="">
                    {loadingGenres
                      ? "Loading genres..."
                      : "Select a genre"}
                  </option>

                  {genres.map((genre) => (
                    <option
                      key={genre.id}
                      value={genre.id}
                    >
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Body */}

          <section className="rounded-3xl border border-black/[0.07] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-black text-gray-950">
                Article body
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Write your article directly here.
              </p>
            </div>

            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              placeholder="Start writing your article..."
              rows={16}
              className="w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm leading-7 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />

            <p className="mt-3 text-xs text-gray-400">
              You can leave this empty if you are uploading a
              PDF.
            </p>
          </section>

          {/* PDF */}

          <section className="rounded-3xl border border-black/[0.07] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-black text-gray-950">
                PDF document
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Optional. Maximum file size is 10 MB.
              </p>
            </div>

            {!pdf ? (
              <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 py-12 text-center transition hover:border-indigo-300 hover:bg-indigo-50/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm transition group-hover:text-indigo-600">
                  <Upload size={21} />
                </div>

                <p className="mt-4 text-sm font-bold text-gray-900">
                  Upload PDF
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  PDF only · Maximum 10 MB
                </p>

                <input
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={handlePdfChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <FileText size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-gray-900">
                    {pdf.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {(pdf.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>

                <button
                  type="button"
                  onClick={removePdf}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                  aria-label="Remove PDF"
                >
                  <X size={17} />
                </button>
              </div>
            )}
          </section>

          {/* Submit */}

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/creator/create")}
              disabled={publishing}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:text-gray-950 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={publishing || loadingGenres}
              className="flex items-center gap-2 rounded-xl bg-gray-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {publishing && (
                <Loader2
                  size={17}
                  className="animate-spin"
                />
              )}

              {publishing
                ? "Publishing..."
                : "Publish Article"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateArticle;