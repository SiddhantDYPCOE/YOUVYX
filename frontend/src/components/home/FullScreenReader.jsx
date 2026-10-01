import {
  ArrowDown,
  ArrowUp,
  Minimize2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import ContentCard from "../content/ContentCard";

const FullScreenReader = ({
  contents,
  currentContentIndex,
  handleExitFullScreen,
  handleNextContent,
  handlePreviousContent,
}) => {
  const navigate = useNavigate();

  const currentContent = contents[currentContentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex h-screen w-screen flex-col bg-[#f7f7f8]">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/[0.06] bg-white/90 px-5 backdrop-blur-xl sm:px-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-xl font-black tracking-tight text-gray-950"
        >
          YOUVYX
        </button>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium text-gray-400 sm:block">
            {currentContentIndex + 1} / {contents.length}
          </span>

          <button
            type="button"
            onClick={handleExitFullScreen}
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:text-gray-950"
          >
            <Minimize2 size={16} />

            <span className="hidden sm:inline">
              Exit Full Screen
            </span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="relative flex-1 overflow-y-auto">
        <div className="mx-auto flex min-h-full max-w-4xl items-start justify-center px-5 py-10 sm:px-8 sm:py-16">
          <div className="w-full">
            <ContentCard
              content={currentContent}
              onOpen={(id) =>
                navigate(`/content/${id}`)
              }
            />
          </div>
        </div>
      </main>

      {/* Navigation */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        <button
          type="button"
          onClick={handlePreviousContent}
          disabled={currentContentIndex === 0}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous content"
        >
          <ArrowUp size={18} />
        </button>

        <button
          type="button"
          onClick={handleNextContent}
          disabled={
            currentContentIndex === contents.length - 1
          }
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next content"
        >
          <ArrowDown size={18} />
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-6 hidden text-xs text-gray-400 lg:block">
        ↑ ↓ to navigate · Esc to exit
      </div>
    </div>
  );
};

export default FullScreenReader;