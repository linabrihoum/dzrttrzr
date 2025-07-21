import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "DZRT TRZR - Electronic Music Artist",
  description: "Pushing the boundaries of electronic music with raw energy and innovative sound design. A project by Alex Negrin.",
  keywords: ["electronic music", "DZRT TRZR", "Alex Negrin", "electronic artist", "music"],
  authors: [{ name: "Alex Negrin" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
