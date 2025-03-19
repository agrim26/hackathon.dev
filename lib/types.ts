export interface Prize {
  id: number;
  title: string;
  amount: string;
  description: string;
  category: "grand" | "runner-up" | "ui-ux";
}

export interface Judge {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: "diamond" | "platinum" | "gold" | "silver";
  website: string;
}
