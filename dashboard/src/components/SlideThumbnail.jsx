import { useEffect, useRef, useState } from "react";

export default function SlideThumbnail({
  bridge,
  index,
  revision,
  aspect,
  title,
}) {
  const element = useRef(null);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "160px" },
    );
    observer.observe(element.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!bridge || !visible) return;
    let active = true;
    bridge.thumbnail(index, (result) => {
      if (active) setImage(result);
    });
    return () => {
      active = false;
    };
  }, [bridge, index, revision, visible]);
  return (
    <span ref={element} className="slide-preview">
      <span
        className="slide-preview-image"
        style={{ aspectRatio: aspect || 16 / 9 }}
      >
        {image ? (
          <img src={image} alt={`Slide ${index + 1}: ${title}`} />
        ) : (
          <span className="text-[10px] text-muted">
            {bridge ? "Slide preview" : title}
          </span>
        )}
      </span>
      <span className="flex min-w-0 items-center gap-2 pt-2">
        <small className="shrink-0 font-mono text-muted">
          {String(index + 1).padStart(2, "0")}
        </small>
        <span className="truncate">{title}</span>
      </span>
    </span>
  );
}
