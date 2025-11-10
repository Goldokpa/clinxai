import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClinixAI Enterprise - AI-Powered Healthcare Transformation",
  description: "Revolutionizing clinical practice through cutting-edge artificial intelligence. Enhancing diagnostics, telemedicine, and emergency response globally.",
  keywords: ["AI Healthcare", "Telemedicine", "Medical AI", "Healthcare Innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-dark text-white overflow-x-hidden">
        <div className="gradient-bg fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent" style={{ backgroundPosition: '20% 50%' }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-secondary/10 via-transparent to-transparent" style={{ backgroundPosition: '80% 80%' }}></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

