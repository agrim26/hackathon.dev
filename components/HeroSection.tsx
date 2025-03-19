"use client";

import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { HACKATHON_DATE } from "@/lib/constants";
import { Timer } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  // Add this state to prevent server-side rendering of the countdown
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white py-12 sm:py-16">
      {/* Background overlay to ensure full black coverage */}
      <div className="absolute inset-0 bg-black"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full"
      >
        <span className="bg-secondary text-secondary-foreground px-4 py-4 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
          Virtual Event
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 mt-4">
          The Worlds Largest
          <span className="text-primary block mt-1 sm:mt-2">Hackathon</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto px-2">
          Join thousands of developers worldwide in building the future of
          technology
        </p>

        <div className="mb-8 sm:mb-12">
          {isClient ? (
            React.createElement(Countdown as any, {
              date: HACKATHON_DATE,
              renderer: ({
                days,
                hours,
                minutes,
                seconds,
              }: {
                days: number;
                hours: number;
                minutes: number;
                seconds: number;
              }) => (
                <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
                  {[
                    { value: days, label: "Days" },
                    { value: hours, label: "Hours" },
                    { value: minutes, label: "Minutes" },
                    { value: seconds, label: "Seconds" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <div className="bg-card rounded-lg p-2 sm:p-3 md:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] border">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                          {value}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm mt-1 sm:mt-2 block text-muted-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              ),
            })
          ) : (
            // Placeholder for server-side rendering
            <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
              {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                <div key={label} className="text-center">
                  <div className="bg-card rounded-lg p-2 sm:p-3 md:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] border">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      -
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm mt-1 sm:mt-2 block text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="btn-primary text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
          Register Now
        </button>
      </motion.div>
    </section>
  );
}
