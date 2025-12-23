import { useEffect } from "react";
import { stories, users } from "@/data/stories";
import ProgressBar from "./ProgressBar";

export default function StoryViewer({ index, setIndex, close }: any) {
  const story = stories[index];
  const user = users.find((u) => u.id === story.userId);

  useEffect(() => {
    const stored = sessionStorage.getItem("viewedStories");
    const viewed = stored ? JSON.parse(stored) : [];

    if (!viewed.includes(story.id)) {
      sessionStorage.setItem(
        "viewedStories",
        JSON.stringify([...viewed, story.id])
      );
    }
  }, [story.id]);

  return (
    <div className="viewer">
      <ProgressBar
        onFinish={() =>
          index < stories.length - 1 ? setIndex(index + 1) : close()
        }
      />

      {/* HEADER */}
      <div className="viewer-header">
        <img src={user?.avatar} />
        <span className="viewer-name">{user?.name}</span>
        <span className="close-btn" onClick={close}>✕</span>
      </div>

      {/* STORY IMAGE */}
      <img src={story.media} className="viewer-image" />

      {/* TAP AREAS */}
      <div
        onClick={() => index > 0 && setIndex(index - 1)}
        style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%" }}
      />
      <div
        onClick={() =>
          index < stories.length - 1 ? setIndex(index + 1) : close()
        }
        style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%" }}
      />
    </div>
  );
}
