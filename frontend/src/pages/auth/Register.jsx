import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { register, login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    accountType: "NORMAL",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await register(formData);

      // Login immediately after successful registration.
      await login({
        email: formData.email,
        password: formData.password,
      });

      navigate("/genres", { replace: true });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to create your account. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left side */}
        <div className="relative hidden overflow-hidden bg-neutral-950 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(129,140,248,0.25),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.2),transparent_35%)]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              YOUVYX<span className="text-indigo-400">.</span>
            </Link>

            <div className="max-w-xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-indigo-300">
                Build your feed
              </p>

              <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white xl:text-6xl">
                Choose what you want to{" "}
                <span className="text-indigo-400">know.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-neutral-400">
                Pick the topics you care about and we'll build your
                personalized knowledge feed.
              </p>
            </div>

            <p className="text-sm text-neutral-500">
              Your interests. Your feed.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-10 block text-center text-2xl font-bold tracking-tight text-neutral-950 lg:hidden"
            >
              YOUVYX<span className="text-indigo-600">.</span>
            </Link>

            <div className="mb-7">
              <p className="mb-2 text-sm font-medium text-indigo-600">
                Get started
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Set up your YOUVYX profile in a few seconds.
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Siddhant Pitlawar"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Username
                </label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="siddhant_p"
                  autoComplete="username"
                  required
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimum 8 characters"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-4 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;