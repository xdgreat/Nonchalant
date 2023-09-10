import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nonchalant - Explore Nonchalant's Stupidity",
  description: "Welcome to Nonchalant.",
  author: "Nikhil Naiker",
  keywords: "adventures, exploration, unique experiences, community",
  image: "https://nonchalantz.com/assets/logo.png",
  canonicalURL: "https://nonchalantz.com",
  robots: "index, follow",
  ogTitle: "Nonchalant",
  ogDescription: "Welcome to Nonchalant.",
  ogImage: "https://nonchalantz.com/assets/logo.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Nonchalant - Explore Nonchalant's Stupidity",
  twitterDescription: "Welcome to Nonchalant.",
  twitterImage: "https://nonchalantz.com/assets/logo.png",
  charset: "UTF-8",
  favicon: "https://nonchalantz.com/assets/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
