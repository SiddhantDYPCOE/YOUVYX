
const ContentTypeNavigation = ({
  contentTab,
  setContentTab,
}) => {
  const tabs = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "articles",
      label: "Articles",
    },
    {
      id: "discover",
      label: "Discover",
    },
  ];

  return (
    <nav className="mt-8 flex justify-center">
      <div className="flex items-center gap-7">
        {tabs.map((tab) => {
          const isActive = contentTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setContentTab(tab.id)}
              className={`relative pb-2 text-sm font-medium transition ${
                isActive
                  ? "text-gray-950"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab.label}

              {isActive && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gray-950" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default ContentTypeNavigation;
