"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import type { ConfettiRef } from "@/components/confetti";
import { Confetti, ConfettiButton } from "@/components/confetti";
import { Button } from "@/components/ui/button";

export default function ConfettiDemo() {
  const confettiRef = useRef(null);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}

function ConfettiButtonDemo() {
  return (
    <div className="relative">
      <ConfettiButton>Confetti 🎉</ConfettiButton>
    </div>
  );
}

function ConfettiRandom() {
  return (
    <div className="relative">
      <ConfettiButton
        options={{
          get angle() {
            return Math.random() * 360;
          },
        }}
      >
        Random Confetti 🎉
      </ConfettiButton>
    </div>
  );
}

function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Fireworks</Button>
    </div>
  );
}

function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Side Cannons</Button>
    </div>
  );
}

function ConfettiStars() {
  const handleClick = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Stars</Button>
    </div>
  );
}

function ConfettiCustomShapes() {
  const handleClick = () => {
    const scalar = 2;
    const triangle = confetti.shapeFromPath({
      path: "M0 10 L5 0 L10 10z",
    });
    const square = confetti.shapeFromPath({
      path: "M0 0 L10 0 L10 10 L0 10 Z",
    });
    const coin = confetti.shapeFromPath({
      path: "M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z",
    });
    const tree = confetti.shapeFromPath({
      path: "M5 0 L10 10 L0 10 Z",
    });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [triangle, square, coin, tree],
      scalar,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <div className="relative flex items-center justify-center">
      <Button onClick={handleClick}>Trigger Shapes</Button>
    </div>
  );
}

function ConfettiEmoji() {
  const handleClick = () => {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "🦄", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <div className="relative justify-center">
      <Button onClick={handleClick}>Trigger Emoji</Button>
    </div>
  );
}

function ConfettiCard({
  heading = "Hover for Celebration!",
  description = "Move your mouse over this card to trigger a confetti explosion",
  icon,
}: {
  heading?: string;
  description?: string;
  icon?: React.ReactNode;
}) {
  const containerRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (!containerRef.current) return;

    // Create a canvas specifically for this card
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "5";

    // Add the canvas to the card
    containerRef.current.appendChild(canvas);

    // Create a confetti instance for this canvas
    const cardConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
      disableForReducedMotion: true,
    });

    // Create a more vibrant confetti effect with multiple bursts
    // First burst - center
    cardConfetti({
      particleCount: 80,
      spread: 75,
      startVelocity: 20,
      origin: { x: 0.5, y: 0.5 },
      gravity: 0.7,
      decay: 0.92,
      ticks: 180,
      colors: [
        "#FF577F",
        "#FF884B",
        "#FFBD59",
        "#FFE459",
        "#A6FF96",
        "#5EDFFF",
        "#C199FF",
      ],
      scalar: 0.9,
    });

    // Second burst - slightly delayed for a more dynamic effect
    setTimeout(() => {
      cardConfetti({
        particleCount: 40,
        spread: 60,
        startVelocity: 15,
        origin: { x: 0.3, y: 0.4 },
        gravity: 0.7,
        decay: 0.92,
        ticks: 150,
        colors: [
          "#FF577F",
          "#FF884B",
          "#FFBD59",
          "#FFE459",
          "#A6FF96",
          "#5EDFFF",
          "#C199FF",
        ],
        scalar: 0.8,
      });

      cardConfetti({
        particleCount: 40,
        spread: 60,
        startVelocity: 15,
        origin: { x: 0.7, y: 0.4 },
        gravity: 0.7,
        decay: 0.92,
        ticks: 150,
        colors: [
          "#FF577F",
          "#FF884B",
          "#FFBD59",
          "#FFE459",
          "#A6FF96",
          "#5EDFFF",
          "#C199FF",
        ],
        scalar: 0.8,
      });
    }, 100);

    // Let the animation complete naturally before removing the canvas
    setTimeout(() => {
      if (containerRef.current && containerRef.current.contains(canvas)) {
        // Fade out the canvas before removing it
        const fadeOut = () => {
          let opacity = 1;
          const fadeInterval = setInterval(() => {
            if (opacity <= 0.1) {
              clearInterval(fadeInterval);
              if (
                containerRef.current &&
                containerRef.current.contains(canvas)
              ) {
                containerRef.current.removeChild(canvas);
              }
            } else {
              opacity -= 0.1;
              canvas.style.opacity = opacity.toString();
            }
          }, 50);
        };

        // Start fading out after the confetti has mostly settled
        setTimeout(fadeOut, 1800);
      }
    }, 3000);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-64 w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-xl border bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-black"
      onMouseEnter={handleMouseEnter}
    >
      {icon && <div className="mb-4 z-10">{icon}</div>}
      <h3 className="mb-4 text-2xl font-bold dark:text-white z-10">
        {heading}
      </h3>
      <p className="text-center dark:text-gray-300 z-10">{description}</p>
    </div>
  );
}

export {
  ConfettiDemo,
  ConfettiButtonDemo,
  ConfettiRandom,
  ConfettiFireworks,
  ConfettiSideCannons,
  ConfettiStars,
  ConfettiCustomShapes,
  ConfettiEmoji,
  ConfettiCard,
};
