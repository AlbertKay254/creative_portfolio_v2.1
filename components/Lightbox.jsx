'use client';

export default function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <button className="lightbox" onClick={onClose} aria-label="Close image">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.title} />
      <span className="lightbox-bar">
        <span>
          {item.title}
          {item.year ? ` — ${item.year}` : ''}
        </span>
        <span>Click anywhere to close ✕</span>
      </span>
    </button>
  );
}
