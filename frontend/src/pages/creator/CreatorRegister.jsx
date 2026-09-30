
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Crown,
  PenLine,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const benefits = [
  {
    icon: PenLine,
    title: "Publish your ideas",
    description:
      "Create and publish knowledge-focused content for the YOUVYX community.",
  },
  {
    icon: Users,
    title: "Reach your audience",
    description:
      "Share your expertise with people interested in the genres you publish in.",
  },
  {
    icon: Sparkles,
    title: "Build your presence",
    description:
      "Grow your creator profile and establish yourself around the topics you know.",
  },
];

const CreatorRegister = () => {
  const navigate = useNavigate();
  const { user, becomeCreator } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBecomeCreator = async () => {
    setError("");
    setLoading(true);

    try {
      await becomeCreator();
      navigate("/creator/create", { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  if (user?.accountType === "CREATOR") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
        <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <Crown size={26} />
          </div>

          <h1 className="text-2xl font-bold text-neutral-950">
            You're already a creator
          </h1>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            You already have access to creator tools.
          </p>

          <button
            type="button"
            onClick={() => navigate("/creator/create")}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Open Creator Studio
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
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
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Left */}
          <section>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
              <Crown size={14} />
              Creator Program
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              Turn your knowledge into something people can discover.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg">
              Become a YOUVYX creator and start publishing useful,
              knowledge-driven content for the community.
            </p>

            <div className="mt-9 space-y-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-neutral-200">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-neutral-950">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 max-w-md text-sm leading-6 text-neutral-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Right card */}
          <section className="lg:justify-self-end lg:w-full lg:max-w-md">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <div className="bg-neutral-950 p-7 text-white sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles size={22} />
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  Become a creator
                </h2>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  You're signed in as{" "}
                  <span className="font-medium text-white">
                    @{user?.username}
                  </span>
                </p>
              </div>

              <div className="p-7 sm:p-8">
                <div className="space-y-4">
                  {[
                    "Publish your own content",
                    "Choose a genre for every article",
                    "Build your creator profile",
                    "Access Creator Studio",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <Check size={13} strokeWidth={3} />
                      </div>

                      <span className="text-sm text-neutral-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {error && (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleBecomeCreator}
                  disabled={loading}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Activating creator account...
                    </>
                  ) : (
                    <>
                      Become a Creator
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-neutral-400">
                  You can start publishing immediately after activation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CreatorRegister;

