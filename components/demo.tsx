"use client";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <canvas
      className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
      id="canvas"
    ></canvas>
  );
}
