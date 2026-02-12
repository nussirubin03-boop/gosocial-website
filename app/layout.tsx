import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoSocial | Strategic Content Agency",
  description:
    "GoSocial helps brands dominate social media with premium strategy, production, and growth systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
