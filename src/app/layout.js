import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import favicon from "./favicon.ico";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nonchalant - Explore Casual Adventures",
  description: "Welcome to Nonchalant.",
  author: "Nikhil Naiker",
  keywords: "adventures, exploration, unique experiences, community",
  image: "https://nonchalantz.com/path/to/default-image.jpg",
  canonicalURL: "https://nonchalantz.com",
  robots: "index, follow",
  ogTitle: "Nonchalant",
  ogDescription: "Welcome to Nonchalant.",
  ogImage: "https://nonchalantz.com/path/to/open-graph-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Nonchalant - Explore Casual Adventures",
  twitterDescription: "Welcome to Nonchalant.",
  twitterImage: "https://nonchalantz.com/path/to/twitter-card-image.jpg",
  viewport: "width=device-width, initial-scale=1.0",
  language: "en",
  charset: "UTF-8",
  favicon: favicon,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
