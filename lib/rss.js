import Parser from "rss-parser";

export const FEEDS = [
  {
    slug: "nextjs-blog",
    title: "Next.js Blog",
    url: "https://nextjs.org/feed.xml",
  },
  {
    slug: "vercel-blog",
    title: "Vercel Blog",
    url: "https://vercel.com/atom",
  },
  {
    slug: "netlify",
    title: "Netlify Blog",
    url: "https://www.netlify.com/blog/index.xml",
  },
  {
    slug: "andreaskeller",
    title: "Andreas Keller",
    url: "https://andreaskeller.name/feed.xml",
  },
  {
    slug: "css-tricks",
    title: "CSS-TRICKS",
    url: "https://css-tricks.com/feed",
  },
  {
    slug: "colby-fayock",
    title: "Colby Fayock",
    url: "https://www.colbyfayock.com/rss.xml",
  },
  {
    slug: "react-tricks",
    title: "React Tricks",
    url: "https://reacttricks.com/feed.xml",
  },
  {
    slug: "james-quick",
    title: "James Quick",
    url: "https://www.jamesqquick.com/feed.xml",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
