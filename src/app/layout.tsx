import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { cn } from "../../shadcn/lib/utils";

import localFont from "next/font/local";

import "./globals.css";

const adelle = localFont({
  src: [
    {
      path: "./fonts/adelle/adelleBold.otf",
      weight: "700",
    },
    {
      path: "./fonts/adelle/adelleSemibold.otf",
      weight: "600",
    },
    {
      path: "./fonts/adelle/adelleRegular.otf",
      weight: "400",
    },
  ],
  variable: "--font-adelle",
});

const neuzeit = localFont({
  src: [
    {
      path: "./fonts/neuzeit/Neuzeit-Black.otf",
      weight: "800",
    },
    {
      path: "./fonts/neuzeit/Neuzeit-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/neuzeit/Neuzeit-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/neuzeit/Neuzeit-Light.otf",
      weight: "300",
    },
  ],
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
        baseTheme: dark,
        variables: { colorPrimary: "#ec443c" },
      }}
    >
      <html lang="en">
        <body
          className={cn(
            "font-Neuzeit antialiased",
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
