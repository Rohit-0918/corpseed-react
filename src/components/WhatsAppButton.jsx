import React, { useState, useRef, useEffect } from "react";

const WhatsAppButton = () => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ bottom: 20, right: 20 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [moved, setMoved] = useState(false);

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    const rect = buttonRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDragging(true);
    setMoved(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        left: e.clientX - offset.x,
        top: e.clientY - offset.y,
        bottom: undefined,
        right: undefined,
      });
      setMoved(true);
    }
  };

  const handleMouseUp = () => setDragging(false);

  // Touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const rect = buttonRef.current.getBoundingClientRect();
    setOffset({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    setDragging(true);
    setMoved(false);
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const touch = e.touches[0];
      setPosition({
        left: touch.clientX - offset.x,
        top: touch.clientY - offset.y,
        bottom: undefined,
        right: undefined,
      });
      setMoved(true);
    }
  };

  const handleTouchEnd = () => setDragging(false);

  const handleClick = (e) => {
    if (moved) e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging, offset]);

  return (
    <a
      href="https://wa.me/7558640644"
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      className="fixed z-50 bg-green-500 rounded-full  shadow-lg hover:scale-110 transition-transform cursor-pointer select-none"
      style={position}
    >
      {/* WhatsApp Icon */}
     <svg width="50" viewBox="0 0 24 24"><defs></defs>
            <path fill="#eceff1" d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"></path>
            <path fill="#4caf50" d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"></path>
            <path fill="#fafafa" d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"></path>
        </svg>
    </a>
  );
};

export default WhatsAppButton;
