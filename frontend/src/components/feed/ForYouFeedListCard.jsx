import { memo, useState } from "react";
import { Heart } from "lucide-react";

/* ------------------------------------------------------------------
 * Instagram-style feed post.
 *   item = { type: "POST" | "CONTENT", createdAt, data }
 *
 * Like button: UI only for now. It toggles locally and calls
 * `onToggleLike(item, nextLiked)` if you pass it. If that returns a
 * rejected promise the like is rolled back automatically.
 *
 * ADJUST: media field names in resolveContentMedia (Article / Image /
 * Video models were not shared yet).
 * ------------------------------------------------------------------ */

const ASPECT = { "1:1": 1, "4:5": 4 / 5, "1.91:1": 1.91 };

const timeAgo = (dateString) => {
  const seconds = Math.floor((Date.now() - new Date(dateString)) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
};

const getInitials = (name) => {
  if (!name || typeof name !== "string") return "U";
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const Avatar = ({ person }) => (
  <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-[11px] font-bold text-gray-600 ring-2 ring-indigo-100">
    {person?.profileImage ? (
      <img
        src={person.profileImage}
        alt=""
        className="h-full w-full object-cover"
      />
    ) : (
      getInitials(person?.name)
    )}
  </span>
);

// ADJUST the field names to match your Article / Image / Video models.
const resolveContentMedia = (content) => {
  if (content.video) {
    return {
      kind: "video",
      src: content.video.url || content.video.videoUrl || content.video.mediaUrl,
      thumb:
        content.video.thumbnailUrl ||
        content.video.thumbnail ||
        content.video.coverImage,
    };
  }

  if (content.image) {
    const src =
      content.image.url ||
      content.image.imageUrl ||
      content.image.mediaUrl ||
      content.image.src;
    return { kind: "image", src };
  }

  if (content.article) {
    return {
      kind: "article",
      src: content.article.coverImage || content.article.coverImageUrl,
      text:
        content.article.excerpt ||
        content.article.summary ||
        content.article.body ||
        content.article.content,
    };
  }

  return { kind: "none" };
};

const normalise = (item) => {
  if (item.type === "POST") {
    const post = item.data;

    return {
      isPost: true,
      person: post.author,
      createdAt: post.createdAt,
      kind: "image",
      src: post.mediaUrl,
      ratio: ASPECT[post.aspectRatio] || 1,
      title: "",
      caption: post.content,
      tags: post.tags || [],
      likes: post._count?.likes ?? 0,
      liked: Boolean(post.isLiked),
    };
  }

  const content = item.data;
  const media = resolveContentMedia(content);

  return {
    isPost: false,
    person: content.creator,
    createdAt: content.createdAt,
    kind: media.kind,
    src: media.src,
    thumb: media.thumb,
    articleText: media.text,
    title: content.title,
    caption: content.description,
    genre: content.genre?.name,
    tags: [],
    likes: content._count?.likes ?? 0,
    liked: Boolean(content.isLiked),
  };
};

/* ---------- caption with "more" ---------- */

const Caption = ({ username, text }) => {
  const [expanded, setExpanded] = useState(false);
  const long = text.length > 140;

  return (
    <p
      className={`whitespace-pre-wrap break-words text-sm leading-6 text-gray-800 ${
        expanded ? "" : "line-clamp-2"
      }`}
    >
      <span className="mr-1.5 font-semibold text-gray-950">{username}</span>
      {text}
      {long && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="ml-1 text-gray-400 hover:text-gray-600"
        >
          more
        </button>
      )}
    </p>
  );
};

/* ---------- public component ---------- */

const ForYouFeedListCard = ({ item, onToggleLike }) => {
  const view = normalise(item || {});
  const [liked, setLiked] = useState(view.liked);
  const [likeCount, setLikeCount] = useState(view.likes);

  if (!item?.data) return null;

  const setLike = async (next) => {
    if (next === liked) return;

    // optimistic update
    setLiked(next);
    setLikeCount((count) => Math.max(0, count + (next ? 1 : -1)));

    try {
      await onToggleLike?.(item, next);
    } catch {
      // roll back if the handler fails
      setLiked(!next);
      setLikeCount((count) => Math.max(0, count + (next ? -1 : 1)));
    }
  };

  const username = view.person?.username || view.person?.name || "user";
  const hasVisual = Boolean(view.src) || view.kind === "video";

  return (
    <article className="border-b border-gray-200 pb-4">
      {/* Header */}
      <header className="flex items-center gap-3 px-1 py-3">
        <Avatar person={view.person} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm leading-tight text-gray-950">
            <span className="font-semibold">{username}</span>
            <span className="text-gray-400"> · {timeAgo(view.createdAt)}</span>
          </p>
          {view.genre && (
            <p className="truncate text-xs text-gray-400">{view.genre}</p>
          )}
        </div>
        {!view.isPost && (
          <span className="shrink-0 rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-500">
            Creator
          </span>
        )}
      </header>

      {/* Media */}
      {view.kind === "video" && view.src ? (
        <video
          src={view.src}
          poster={view.thumb}
          controls
          preload="metadata"
          className="max-h-[600px] w-full rounded-lg bg-black"
        />
      ) : view.src ? (
        <div
          className="select-none overflow-hidden rounded-lg bg-gray-100"
          style={view.isPost ? { aspectRatio: view.ratio } : undefined}
          onDoubleClick={() => setLike(true)}
        >
          <img
            src={view.src}
            alt={view.title || "Post"}
            loading="lazy"
            draggable={false}
            className={`w-full ${
              view.isPost ? "h-full object-cover" : "max-h-[600px] object-cover"
            }`}
          />
        </div>
      ) : null}

      {/* Text-only post / content (no image) */}
      {!hasVisual && (
        <div
          className="rounded-lg bg-gradient-to-br from-indigo-50 to-white px-5 py-8"
          onDoubleClick={() => setLike(true)}
        >
          <p className="whitespace-pre-wrap break-words text-base leading-7 text-gray-800">
            {view.title || view.caption}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-1 px-1 pt-3">
        <button
          type="button"
          onClick={() => setLike(!liked)}
          aria-pressed={liked}
          aria-label={liked ? "Unlike" : "Like"}
          className="-ml-1 rounded-full p-1.5 transition hover:bg-gray-100 active:scale-90"
        >
          <Heart
            size={24}
            className={
              liked ? "fill-red-500 text-red-500" : "text-gray-900"
            }
          />
        </button>
      </div>

      {/* Likes + caption */}
      <div className="space-y-1 px-1">
        <p className="text-sm font-semibold text-gray-950">
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </p>

        {!view.isPost && view.title && hasVisual && (
          <p className="text-sm font-semibold leading-6 text-gray-950">
            {view.title}
          </p>
        )}

        {view.caption && hasVisual && (
          <Caption username={username} text={view.caption} />
        )}

        {view.articleText && (
          <p className="line-clamp-3 text-sm leading-6 text-gray-500">
            {view.articleText}
          </p>
        )}

        {view.tags.length > 0 && (
          <p className="text-xs text-gray-400">
            With{" "}
            {view.tags.map((tag, index) => (
              <span
                key={tag.id || index}
                className="font-medium text-indigo-600"
              >
                {index > 0 && ", "}@{tag.taggedUser?.username}
              </span>
            ))}
          </p>
        )}
      </div>
    </article>
  );
};

export default memo(ForYouFeedListCard);