import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity Enterprises | Industrial & Infrastructure Solutions",
  description:
    "Trinity Enterprises — authorised construction, mining equipment and industrial solutions, with international trade services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
