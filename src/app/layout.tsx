import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { cn } from "../../shadcn/lib/utils";

import localFont from "next/font/local";

import "./globals.css";

const adelle = localFont({
  src: [
    {
      path: "../../public/fonts/Adelle/Adelle-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Adelle/Adelle-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Adelle/Adelle-regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-adelle",
});

const neuzeit = localFont({
  src: [
    {
      path: "../../public/fonts/Neuzeit/Neuzeit-Black.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Neuzeit/Neuzeit-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Neuzeit/Neuzeit-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Neuzeit/Neuzeit-Light.otf",
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
