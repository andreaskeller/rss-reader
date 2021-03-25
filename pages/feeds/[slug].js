import { FEEDS, getFeed } from "lib/rss";
import { format } from "date-fns";

export default function Feed({ feed, items }) {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto">
      <h1 className="font-bold text-5xl mb-12">{feed.title}</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <a
            key={item.link}
            className="block p-4 border border-gray-200 hover:border-gray-500 rounded-lg"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="font-bold">{item.title}</div>
            <div>{format(new Date(item.isoDate), "PPP")}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug);
  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      feed,
      items: detailedFeed.items,
    },
    revalidate: 1,
  };
}
