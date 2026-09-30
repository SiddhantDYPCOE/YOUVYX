import { useEffect, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  getGenres,
  getMyGenres,
  replaceMyGenres,
} from "../../services/genre.api";

const GenreSelection = () => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

 useEffect(() => {
  const loadGenres = async () => {
    try {
      setLoading(true);
      setError("");

      const genresResponse = await getGenres();

      console.log("ALL GENRES:", genresResponse);

      setGenres(genresResponse.data.genres || []);

      try {
        const myGenresResponse = await getMyGenres();

        console.log("MY GENRES:", myGenresResponse);

        const selectedIds = myGenresResponse.data.genres.map(
          (item) => item.genreId
        );

        setSelectedGenres(selectedIds);
      } catch (error) {
        console.error("MY GENRES ERROR:", error);
      }
    } catch (error) {
      console.error("ALL GENRES ERROR:", error);

      setError(
        error.response?.data?.message ||
          "Unable to load genres. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  loadGenres();
}, []);

  const toggleGenre = (genreId) => {
    setError("");

    setSelectedGenres((current) => {
      if (current.includes(genreId)) {
        return current.filter((id) => id !== genreId);
      }

      if (current.length >= 5) {
        setError("You can select a maximum of 5 genres.");
        return current;
      }

      return [...current, genreId];
    });
  };

  const handleContinue = async () => {
    if (selectedGenres.length === 0) {
      setError("Please select at least one genre.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      await replaceMyGenres(selectedGenres);

      navigate("/", { replace: true });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to save your interests."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f8]">
        <Loader2
          size={28}
          className="animate-spin text-neutral-900"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f8] px-5 py-10 sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-8 text-xl font-bold tracking-tight text-neutral-950">
            YOUVYX<span className="text-indigo-600">.</span>
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
              Personalize your feed
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              What are you interested in?
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-500">
              Choose up to 5 topics. We'll use them to build your
              personalized YOUVYX feed.
            </p>
          </div>
        </div>

        {/* Selection count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-medium text-neutral-700">
            Choose your topics
          </p>

          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-neutral-200">
            <span className="text-indigo-600">
              {selectedGenres.length}
            </span>
            <span className="text-neutral-400"> / 5 selected</span>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Genres */}
        {genres.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center">
            <p className="text-sm text-neutral-500">
              No genres are available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {genres.map((genre) => {
              const selected = selectedGenres.includes(genre.id);

              const disabled =
                !selected && selectedGenres.length >= 5;

              return (
                <button
                  key={genre.id}
                  type="button"
                  onClick={() => toggleGenre(genre.id)}
                  disabled={disabled}
                  className={`
                    group relative flex min-h-[110px] flex-col
                    justify-between rounded-2xl border p-5 text-left
                    transition-all duration-200
                    ${
                      selected
                        ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/10"
                        : "border-neutral-200 bg-white hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm"
                    }
                    ${
                      disabled
                        ? "cursor-not-allowed opacity-40"
                        : "cursor-pointer"
                    }
                  `}
                >
                  <span
                    className={`
                      flex h-8 w-8 items-center justify-center
                      rounded-full border transition
                      ${
                        selected
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-neutral-300 bg-white text-transparent group-hover:border-neutral-400"
                      }
                    `}
                  >
                    <Check size={16} strokeWidth={2.5} />
                  </span>

                  <span
                    className={`
                      mt-5 text-base font-medium
                      ${
                        selected
                          ? "text-indigo-950"
                          : "text-neutral-800"
                      }
                    `}
                  >
                    {genre.name}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom */}
        <div className="mt-auto flex flex-col gap-4 border-t border-neutral-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400">
            You can change these preferences later.
          </p>

          <button
            type="button"
            onClick={handleContinue}
            disabled={saving || selectedGenres.length === 0}
            className="flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {saving ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                Build my feed
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenreSelection;