
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Search as SearchIcon,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { searchCreatorsAndUsers } from "../../services/creator.api";

const getInitials = (name) => {
  if (!name) return "U";

  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const Search = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const [results, setResults] = useState({
    creators: [],
    users: [],
  });

  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setResults({
        creators: [],
        users: [],
      });

      setSearched(false);
      setError("");

      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await searchCreatorsAndUsers(trimmedQuery);

        setResults({
          creators: response?.data?.creators || [],
          users: response?.data?.users || [],
        });

        setSearched(true);
      } catch (error) {
        setError(
          error?.response?.data?.message ||
            "Unable to search"
        );

        setResults({
          creators: [],
          users: [],
        });
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  const handleOpenProfile = (person) => {
    if (person.accountType === "CREATOR") {
      navigate(`/creator/${person.id}`);
      return;
    }

    navigate(`/profile/${person.id}`);
  };

  const totalResults =
    results.creators.length + results.users.length;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-black/[0.07] bg-white">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1 className="text-lg font-bold text-gray-950">
              Search
            </h1>

            <p className="text-xs text-gray-400">
              Find creators and people
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Search Box */}
        <div className="relative">
          <SearchIcon
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search by name or username..."
            autoFocus
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-12 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
          />

          {loading && (
            <Loader2
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-indigo-500"
            />
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Initial State */}
        {!searched && !loading && !error && (
          <div className="py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <SearchIcon
                size={28}
                className="text-gray-300"
              />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-900">
              Search YOUVYX
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Find creators and people by name or username.
            </p>
          </div>
        )}

        {/* No Results */}
        {searched &&
          !loading &&
          !error &&
          totalResults === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <UserRound
                  size={28}
                  className="text-gray-300"
                />
              </div>

              <h2 className="mt-5 text-lg font-semibold text-gray-900">
                No results found
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Try searching with another name or username.
              </p>
            </div>
          )}

        {/* Creators */}
        {results.creators.length > 0 && (
          <section className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500">
                  Creators
                </h2>

                <p className="mt-0.5 text-xs text-gray-400">
                  Discover creators on YOUVYX
                </p>
              </div>

              <span className="text-xs text-gray-400">
                {results.creators.length}
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-sm">
              {results.creators.map((creator) => (
                <button
                  key={creator.id}
                  type="button"
                  onClick={() =>
                    handleOpenProfile(creator)
                  }
                  className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-4 text-left transition last:border-b-0 hover:bg-gray-50"
                >
                  {/* Avatar */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                    {creator.profileImage ? (
                      <img
                        src={creator.profileImage}
                        alt={creator.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      getInitials(
                        creator.creator
                          ?.displayName ||
                          creator.name
                      )
                    )}
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="truncate text-sm font-semibold text-gray-950">
                        {creator.creator
                          ?.displayName ||
                          creator.name}
                      </h3>

                      {creator.creator
                        ?.isVerified && (
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-indigo-500"
                        />
                      )}
                    </div>

                    <p className="mt-0.5 text-xs text-gray-500">
                      @{creator.username}
                    </p>

                    {creator.creator?.category && (
                      <p className="mt-1 text-xs text-gray-400">
                        {creator.creator.category}
                      </p>
                    )}
                  </div>

                  {/* Creator Label */}
                  <span className="shrink-0 rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                    Creator
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Normal Users */}
        {results.users.length > 0 && (
          <section className="mt-8">
            <div className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500">
                People
              </h2>

              <p className="mt-0.5 text-xs text-gray-400">
                Other people on YOUVYX
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-sm">
              {results.users.map((person) => (
                <button
                  key={person.id}
                  type="button"
                  onClick={() =>
                    handleOpenProfile(person)
                  }
                  className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-4 text-left transition last:border-b-0 hover:bg-gray-50"
                >
                  {/* Avatar */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                    {person.profileImage ? (
                      <img
                        src={person.profileImage}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      getInitials(person.name)
                    )}
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-gray-950">
                      {person.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-500">
                      @{person.username}
                    </p>

                    {person.bio && (
                      <p className="mt-1 truncate text-xs text-gray-400">
                        {person.bio}
                      </p>
                    )}
                  </div>

                  <UserRound
                    size={18}
                    className="shrink-0 text-gray-300"
                  />
                </button>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Search;
