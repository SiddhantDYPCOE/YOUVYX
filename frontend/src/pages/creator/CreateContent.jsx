import {
  ArrowRight,
  FileText,
  Image,
  Video,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const contentTypes = [
  {
    type: "ARTICLE",
    title: "Article",
    description:
      "Share knowledge through written articles or PDF documents.",
    icon: FileText,
    path: "/creator/create/article",
  },
  {
    type: "IMAGE",
    title: "Image",
    description:
      "Share educational, informative, or visual content.",
    icon: Image,
    path: "/creator/create/image",
  },
  {
    type: "VIDEO",
    title: "Video",
    description:
      "Publish videos and share useful visual content.",
    icon: Video,
    path: "/creator/create/video",
  },
];

const CreateContent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <header className="border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-xl font-black tracking-tight text-gray-950"
          >
            YOUVYX
            <span className="text-indigo-600">.</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="text-sm font-semibold text-gray-500 transition hover:text-gray-950"
          >
            Back to Profile
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
            Creator Studio
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            What do you want to publish?
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Choose a content type to start creating your next
            post.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contentTypes.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.type}
                type="button"
                onClick={() => navigate(item.path)}
                className="group rounded-3xl border border-black/[0.07] bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
                    <ArrowRight size={17} />
                  </div>
                </div>

                <h2 className="mt-6 text-lg font-black text-gray-950">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                <div className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-400 group-hover:text-indigo-600">
                  Create {item.title}
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CreateContent;