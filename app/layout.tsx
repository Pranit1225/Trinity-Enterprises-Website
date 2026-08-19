import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity Enterprises | Industrial & Infrastructure Solutions",
  description:
    "Placeholder landing page for Trinity Enterprises — industrial machinery, construction, mining and infrastructure solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
