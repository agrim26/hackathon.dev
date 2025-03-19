import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/montserrat/700.css";
import type { Metadata } from "next";
import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { montserrat, inter } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Your Site Name",
    template: "%s | Your Site Name",
  },
  description: "Your site description",
  metadataBase: new URL("https://your-production-url.com"),
  keywords: "hackathon, coding, programming, developers, tech event",
  openGraph: {
    title: "The World's Largest Hackathon",
    description:
      "Join thousands of developers worldwide in the biggest virtual hackathon ever.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The World's Largest Hackathon",
    description:
      "Join thousands of developers worldwide in the biggest virtual hackathon ever.",
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
