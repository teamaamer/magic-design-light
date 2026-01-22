import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Design Light | Premium Lighting Design & Installation Dubai",
  description: "Luxury lighting design, supply, and installation for residential, hospitality, and commercial spaces in Dubai. Expert lighting solutions with precision and lasting impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
