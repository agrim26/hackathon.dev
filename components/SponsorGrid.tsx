'use client';

import { motion } from 'framer-motion';
import { SPONSORS } from '@/lib/constants';
import Image from 'next/image';

export default function SponsorGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Backed by industry leaders in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SPONSORS.map((sponsor, index) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card flex items-center justify-center p-8 grayscale hover:grayscale-0"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={100}
                className="object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}