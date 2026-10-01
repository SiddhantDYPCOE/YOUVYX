import { Loader2 } from "lucide-react";

const FeedLoading = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
        <Loader2 className="animate-spin" size={20} />
        Building your feed...
      </div>
    </div>
  );
};

export default FeedLoading;