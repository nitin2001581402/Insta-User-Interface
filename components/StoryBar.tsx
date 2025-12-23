import { useEffect, useState } from "react";
import { users, stories } from "@/data/stories";

export default function StoryBar({ openStory }: any) {
  const [viewed, setViewed] = useState<string[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("viewedStories");
    if (stored) setViewed(JSON.parse(stored));
  }, []);

  return (
    <div className="story-bar">
      {users.map((user) => {
        const story = stories.find((s) => s.userId === user.id);
        if (!story) return null;

        const isViewed = viewed.includes(story.id);

        return (
          <div
            key={user.id}
            className="story-item"
            onClick={() => openStory(stories.indexOf(story))}
          >
            <div className={`story-ring ${isViewed ? "viewed" : ""}`}>
              <img src={user.avatar} className="story-avatar" />
            </div>
            <div className="story-name">{user.name}</div>
          </div>
        );
      })}
    </div>
  );
}
