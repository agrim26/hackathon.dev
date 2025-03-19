import { Prize, Judge, Sponsor } from "./types";

export const HACKATHON_DATE = "2025-03-23T09:00:00";

export const PRIZES: Prize[] = [
  {
    id: 1,
    title: "Grand Prize",
    amount: "$50,000",
    description: "For the most innovative and impactful project",
    category: "grand",
  },
  {
    id: 2,
    title: "Runner Up",
    amount: "$25,000",
    description: "For exceptional technical achievement",
    category: "runner-up",
  },
  {
    id: 3,
    title: "Best UI/UX",
    amount: "$10,000",
    description: "For the most user-friendly and visually appealing project",
    category: "ui-ux",
  },
];

export const JUDGES: Judge[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CTO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "AI/ML expert with 15+ years of experience",
    social: {
      twitter: "sarahchen",
      linkedin: "sarahchen",
      github: "sarahchen",
    },
  },
  // Add more judges...
];

export const SPONSORS: Sponsor[] = [
  {
    id: 1,
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43",
    tier: "diamond",
    website: "https://techcorp.com",
  },
  // Add more sponsors...
];
