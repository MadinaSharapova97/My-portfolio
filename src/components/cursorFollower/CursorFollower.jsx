"use client";

import { useEffect, useRef } from "react";
import "./cursorFollower.css";

export function CursorFollower() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!cursor || !mediaQuery.matches || reducedMotion.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = mouseX;
    let currentY = mouseY;
    let animationFrame;
    let isVisible = false;

    const interactiveElements = ".project-card";

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!isVisible) {
        currentX = mouseX;
        currentY = mouseY;
        isVisible = true;
        cursor.classList.add("cursor-visible");
      }

    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-visible", "cursor-hover");
      isVisible = false;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.10;
      currentY += (mouseY - currentY) * 0.10;

      cursor.style.transform = `translate3d(
        ${currentX}px,
        ${currentY}px,
        0
      ) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-follower" aria-hidden="true" />;
}