
import {
  ArrowUpRight,
  Clock3,
  FileText,
  Play,
} from "lucide-react";

const getReadingTime = (body = "") => {
  if (!body) {
    return "1 min read";
  }

  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
};

const getPreviewText = (body = "", maxLength = 900) => {
  if (!body) {
    return "";
  }

  const cleanText = body.trim();

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return `${cleanText.slice(0, maxLength).trim()}...`;
};

const FullScreenContentCard = ({
  content,
  onOpen,
}) => {
  if (!content) {
    return null;
  }

  const article = content.article || {};
  const image = content.image || {};
  const video = content.video || {};

  const articleBody = article.body || "";

  const creatorName =
    content.creator?.name ||
    content.creator?.username ||
    "Unknown creator";

  const creatorInitial =
    creatorName.charAt(0).toUpperCase();

  const handleOpen = () => {
    onOpen?.(content.id);
  };

  return (
    <article
      onClick={handleOpen}
      className="group relative mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-5xl cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.06)] transition duration-300 hover:border-gray-300 hover:shadow-[0_25px_80px_rgba(0,0,0,0.09)]"
    >
      {/* ------------------------------------------------ */}
      {/* TOP */}
      {/* ------------------------------------------------ */}

      <div className="flex items-center justify-between border-b border-gray-100 px-7 py-5 sm:px-10">
        <div className="flex items-center gap-3">

          {/* Creator avatar */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
            {content.creator?.profileImage ? (
              <img
                src={content.creator.profileImage}
                alt={creatorName}
                className="h-full w-full object-cover"
              />
            ) : (
              creatorInitial
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-950">
              {creatorName}
            </p>

            <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-400">
              <span>
                {content.genre?.name || "General"}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              <span>
                {content.type}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          {content.type === "ARTICLE" && (
            <>
              <Clock3 size={15} />
              <span className="text-xs font-medium">
                {getReadingTime(articleBody)}
              </span>
            </>
          )}

          {content.type === "VIDEO" && (
            <span className="flex items-center gap-1.5 text-xs font-medium">
              <Play size={14} />
              Video
            </span>
          )}

          {content.type === "IMAGE" && (
            <span className="text-xs font-medium">
              Image
            </span>
          )}
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* CONTENT */}
      {/* ------------------------------------------------ */}

      <div className="flex flex-1 flex-col">

        {/* ARTICLE */}

        {content.type === "ARTICLE" && (
          <div className="flex flex-1 flex-col px-7 py-8 sm:px-10 sm:py-10">

            {/* Article subject */}

            {article.subject && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-indigo-500">
                {article.subject}
              </p>
            )}

            {/* Title */}

            <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.03em] text-gray-950 sm:text-4xl lg:text-5xl">
              {content.title}
            </h1>

            {/* Description */}

            {content.description && (
              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                {content.description}
              </p>
            )}

            {/* Divider */}

            <div className="my-7 h-px w-full bg-gray-100" />

            {/* Body */}

            {articleBody ? (
              <div className="max-w-4xl">
                <p className="whitespace-pre-line text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                  {getPreviewText(articleBody)}
                </p>

                {articleBody.length > 900 && (
                  <p className="mt-4 text-sm font-semibold text-indigo-600">
                    Read the full article →
                  </p>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4">
                <FileText
                  size={20}
                  className="text-gray-500"
                />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    PDF article
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    Open the content to read the complete document.
                  </p>
                </div>
              </div>
            )}

            {/* PDF indicator */}

            {article.pdfUrl && (
              <div className="mt-auto pt-8">
                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4">
                  <FileText
                    size={19}
                    className="text-gray-500"
                  />

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      PDF attached
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
                      {article.pdfFileName ||
                        "Attached document"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* IMAGE */}

        {content.type === "IMAGE" && image.url && (
          <div className="flex flex-1 flex-col">

            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gray-50 p-5 sm:p-8">
              <img
                src={image.url}
                alt={content.title}
                className="max-h-[65vh] w-full rounded-2xl object-contain"
              />
            </div>

            <div className="px-7 py-7 sm:px-10">
              <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                {content.title}
              </h1>

              {content.description && (
                <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
                  {content.description}
                </p>
              )}
            </div>
          </div>
        )}

        {/* VIDEO */}

        {content.type === "VIDEO" && video.url && (
          <div className="flex flex-1 flex-col">

            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black">
              <video
                src={video.url}
                controls
                className="max-h-[68vh] w-full object-contain"
                onClick={(event) =>
                  event.stopPropagation()
                }
              />
            </div>

            <div className="px-7 py-7 sm:px-10">
              <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                {content.title}
              </h1>

              {content.description && (
                <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
                  {content.description}
                </p>
              )}
            </div>
          </div>
        )}

      </div>

      {/* ------------------------------------------------ */}
      {/* BOTTOM */}
      {/* ------------------------------------------------ */}

      <div className="flex items-center justify-between border-t border-gray-100 px-7 py-4 sm:px-10">
        <p className="text-xs text-gray-400">
          Click anywhere to open full content
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 transition group-hover:text-indigo-600">
          Open
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
};

export default FullScreenContentCard;
