import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";



import CreatePost from "../../components/post/CreatePost";
import { useAuth } from "../../hooks/useAuth";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <main className="mx-auto w-full max-w-xl px-4 py-6 sm:py-10">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <CreatePost
        currentUserId={user?.id}
        onPostCreated={() => navigate("/")} // back to the feed after publishing
      />
    </main>
  );
};

export default CreatePostPage;