import { useEffect, useState } from "react";

export default function ProgressBar({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          onFinish();
          return 100;
        }
        return p + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ height: 4, background: "#333" }}>
      <div style={{ width: `${progress}%`, height: "100%", background: "#fff" }} />
    </div>
  );
}
