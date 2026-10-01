import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const BecomeCreator = () => {
  const navigate = useNavigate();
  const { becomeCreator } = useAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const convertToCreator = async () => {
      try {
        setLoading(true);
        setError("");

        await becomeCreator();

        setTimeout(() => {
          navigate("/creator/register", {
            replace: true,
          });
        }, 700);
      } catch (error) {
        setError(
          error?.response?.data?.message ||
            "Unable to become a creator"
        );
        setLoading(false);
      }
    };

    convertToCreator();
  }, [becomeCreator, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        {loading ? (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">
              <Loader2
                size={28}
                className="animate-spin text-indigo-600"
              />
            </div>

            <h1 className="mt-6 text-xl font-bold text-neutral-900">
              Setting up your creator account
            </h1>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              We're upgrading your account. This will only take a
              moment.
            </p>
          </>
        ) : (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <CheckCircle2
                size={30}
                className="text-green-600"
              />
            </div>

            <h1 className="mt-6 text-xl font-bold text-neutral-900">
              You're now a creator
            </h1>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Let's set up your creator profile.
            </p>

            {error && (
              <p className="mt-4 text-sm font-medium text-red-500">
                {error}
              </p>
            )}
          </>
        )}

        {error && (
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Go back
          </button>
        )}
      </div>
    </div>
  );
};

export default BecomeCreator;