import ForYouFeedList from "../../components/feed/ForYouFeedList";
import HomeNavigation from "../../components/home/HomeNavigation";
import useForYouFeed from "../../hooks/useForYouFeed";

 
const ForYouFeed = () => {
  const feed = useForYouFeed();
 
  const contents = feed.items
    .filter((item) => item.type === "CONTENT")
    .map((item) => item.data);
 
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:py-10">
      <HomeNavigation
        loadFeed={feed.loadFeed}
        loading={feed.loading}
        refreshing={feed.refreshing}
        contents={contents}
      />
 
      <ForYouFeedList {...feed} />
    </main>
  );
};
 
export default ForYouFeed;