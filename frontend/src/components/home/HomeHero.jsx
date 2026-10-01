import { Sparkles } from "lucide-react";

const HomeHero = () => {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-2 text-indigo-600">
        <Sparkles size={17} />

        <span className="text-sm font-semibold">
          Your personalized feed
        </span>
      </div>

      <h1 className="max-w-2xl text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
        Learn something worth knowing.
      </h1>

      <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
        Content selected around the interests you chose. No
        endless noise — just things worth your attention.
      </p>
    </section>
  );
};

export default HomeHero;