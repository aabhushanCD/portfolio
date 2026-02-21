import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-62.5 h-62.5 rounded-full 
      bg-linear-to-br from-cyan-400/40 via-blue-500/30 to-purple-500/20 
      blur-3xl opacity-70 z-9999"
      style={{
        transform: `translate(${position.x - 125}px, ${position.y - 125}px)`,
      }}
    />
  );
};

export default CustomCursor;
