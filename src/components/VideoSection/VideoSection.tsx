import React, { useState } from "react";
import "./VideoSection.scss";

const VIDEO_URL =
  "https://www.youtube.com/embed/1Bsgv6DnTiI?autoplay=1";

const VideoSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="video-btn"
        onClick={openVideo}
        aria-label="Play Video"
      />

      {/* Modal */}
      {isOpen && (
        <div
          className="video-modal"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              title="Video Player"
              src={VIDEO_URL} // ✅ controlled by React
              allow="autoplay; fullscreen"
              allowFullScreen
            />

            <button
              type="button"
              className="video-close"
              onClick={closeVideo}
              aria-label="Close Video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
