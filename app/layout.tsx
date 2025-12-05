import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeSwitcher from "./components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Cristina Rosillo - Psicóloga",
  description: "Psicología online y bienestar emocional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
