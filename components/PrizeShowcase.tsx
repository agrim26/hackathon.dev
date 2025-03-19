"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import { PRIZES } from "@/lib/constants";
import { ConfettiCard } from "./ConfettiCard";

export default function PrizeShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prizes & Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Win big and get recognized for your innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRIZES.map((prize, index) => (
            <ConfettiCard
              description={prize.description}
              heading={prize.title}
              icon={
                prize.category === "grand" ? (
                  <Trophy className="w-12 h-12 text-yellow-400" />
                ) : prize.category === "runner-up" ? (
                  <Award className="w-12 h-12 text-gray-400" />
                ) : (
                  <Medal className="w-12 h-12 text-bronze-400" />
                )
              }
              key={prize.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
