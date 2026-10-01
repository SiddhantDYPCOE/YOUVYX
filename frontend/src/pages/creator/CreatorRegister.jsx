
import { useState } from "react";
import {
  ArrowRight,
  Globe,
  Loader2,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { createCreatorProfile } from "../../services/creator.api";

const CreatorRegister = () => {
  const navigate = useNavigate();
  const { user, refreshUser } = useAuth();

  const [formData, setFormData] = useState({
    displayName: user?.name || "",
    description: "",
    category: "",
    website: "",
    coverImage: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Remove empty optional URL fields before sending
      const payload = {
        displayName: formData.displayName.trim(),
        description: formData.description.trim(),
        category: formData.category.trim(),
        ...(formData.website.trim() && {
          website: formData.website.trim(),
        }),
        ...(formData.coverImage.trim() && {
          coverImage: formData.coverImage.trim(),
        }),
      };

      await createCreatorProfile(payload);

      await refreshUser();

      navigate("/creator/create", {
        replace: true,
      });
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Unable to create your creator profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={handleBack}
            className="text-xl font-black tracking-tight text-neutral-950"
          >
            YOUVYX<span className="text-indigo-600">.</span>
          </button>

          <button
            type="button"
            onClick={handleBack}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Close"
          >
            <X size={19} />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-2xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Sparkles size={25} />
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
              Set up your creator profile
            </h1>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-neutral-500 sm:text-base">
              Tell the YOUVYX community who you are and what you
              create.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
          >
            {/* Display Name */}
            <div>
              <label
                htmlFor="displayName"
                className="mb-2 block text-sm font-semibold text-neutral-900"
              >
                Creator name
              </label>

              <div className="relative">
                <UserRound
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  value={formData.displayName}
                  onChange={handleChange}
                  placeholder="e.g. Tech With Siddhu"
                  required
                  className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              <p className="mt-1.5 text-xs text-neutral-400">
                This name will appear on your creator profile.
              </p>
            </div>

            {/* Category */}
            <div className="mt-6">
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-semibold text-neutral-900"
              >
                Category
              </label>

              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Technology, Fitness, Reading"
                required
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            {/* Description */}
            <div className="mt-6">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-neutral-900"
              >
                About you
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell people what you create and what they can expect from you..."
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm leading-6 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
              />

              <p className="mt-1.5 text-xs text-neutral-400">
                Keep it clear and useful. This will be shown on your
                creator profile.
              </p>
            </div>

            {/* Website */}
            <div className="mt-6">
              <label
                htmlFor="website"
                className="mb-2 block text-sm font-semibold text-neutral-900"
              >
                Website
                <span className="ml-1 font-normal text-neutral-400">
                  (optional)
                </span>
              </label>

              <div className="relative">
                <Globe
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                />
              </div>
            </div>

            {/* Cover Image */}
            <div className="mt-6">
              <label
                htmlFor="coverImage"
                className="mb-2 block text-sm font-semibold text-neutral-900"
              >
                Cover image URL
                <span className="ml-1 font-normal text-neutral-400">
                  (optional)
                </span>
              </label>

              <input
                id="coverImage"
                name="coverImage"
                type="url"
                value={formData.coverImage}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                  Creating your profile...
                </>
              ) : (
                <>
                  Create Creator Profile
                  <ArrowRight size={17} />
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-neutral-400">
              You can update your creator profile later.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatorRegister;
