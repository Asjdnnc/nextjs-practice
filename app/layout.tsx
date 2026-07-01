import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const S = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const M = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "Developer Event ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", S.variable, M.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
  <div className="absolute inset-0 top-0 z-[-1] min-h-screen" >
  <LightRays
    raysOrigin="top-center-offset"
    raysColor="#0ef5ac"
    raysSpeed={0.4}
    lightSpread={0.9}
    rayLength={0.8}
    followMouse={true}
    mouseInfluence={0.02}
    noiseAmount={0}
    distortion={0}
    pulsating={false}
    fadeDistance={9}
    saturation={1}
/>
</div>
<Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
