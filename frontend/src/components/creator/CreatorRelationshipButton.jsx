import { Check, Loader2, UserMinus, UserPlus, X } from "lucide-react";

const CreatorRelationshipButton = ({
  status,
  loading,
  onFollow,
  onCancel,
  onAccept,
  onReject,
  onRemove,
}) => {
  if (loading) {
    return (
      <button
        disabled
        className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-500"
      >
        <Loader2
          size={16}
          className="animate-spin"
        />
        Please wait
      </button>
    );
  }

  if (status === "REQUEST_RECEIVED") {
    return (
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onAccept}
          className="flex items-center gap-2 rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          <Check size={16} />
          Accept
        </button>

        <button
          type="button"
          onClick={onReject}
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          <X size={16} />
          Reject
        </button>
      </div>
    );
  }

  if (status === "REQUEST_SENT") {
    return (
      <button
        type="button"
        onClick={onCancel}
        className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
      >
        Request Sent
      </button>
    );
  }

  if (status === "FOLLOWING") {
    return (
      <button
        type="button"
        onClick={onRemove}
        className="flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        <Check size={16} />
        Following
      </button>
    );
  }

  if (status === "MUTUAL") {
    return (
      <button
        type="button"
        onClick={onRemove}
        className="flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        <UserMinus size={16} />
        Mutual
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onFollow}
      className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
    >
      <UserPlus size={16} />
      Follow
    </button>
  );
};

export default CreatorRelationshipButton;