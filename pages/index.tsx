import Head from "next/head";
import { useState } from "react";
import StoryBar from "@/components/StoryBar";
import StoryViewer from "@/components/StoryViewer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Instagram Stories Clone</title>
        <meta
          name="description"
          content="Instagram-like stories feature using Next.js"
        />
        <meta property="og:title" content="Instagram Stories" />
        <meta property="og:description" content="SSR Instagram Stories Feature" />
        <meta property="og:image" content="/s1.jpg" />
      </Head>

      {/* Top Header */}
      <header className="top-nav">
        {/* Left side Instagram title */}
        <div className="nav-left">Instagram</div>

        {/* Right side icons */}
        <div className="nav-right">
          {/* Heart (Like) icon */}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 
            3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 
            3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

          {/* Chat icon */}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v14l4-4h14c1.1 
            0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
      </header>

      {/* Stories bar below header, aligned left with padding */}
      <div className="stories-container">
        <StoryBar openStory={setActiveIndex} />
      </div>

      {/* Story viewer modal */}
      {activeIndex !== null && (
        <StoryViewer
          index={activeIndex}
          setIndex={setActiveIndex}
          close={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
