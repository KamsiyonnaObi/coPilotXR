import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { cn } from "../../shadcn/lib/utils";

import localFont from "next/font/local";
import { adelleFonts, neuzeitFonts } from "./constants";
import "./globals.css";

const adelle = localFont({
  src: adelleFonts,
  variable: "--font-adelle",
});

const neuzeit = localFont({
  src: neuzeitFonts,
  variable: "--font-neuzeit",
});

export const metadata: Metadata = {
  title: "CoPilotXR",
  description: "Image editing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#ec443c" },
      }}
    >
      <html lang="en">
        <body
          className={cn(
            "font-Adelle antialiased",
            adelle.variable,
            neuzeit.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
