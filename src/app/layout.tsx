import type { Metadata } from "next";
import { Sora, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shaik Abdul Rahamtulla | Portfolio",
  description: "B.Tech Computer Science student specializing in AI/ML & Full-Stack Web Development. View projects, skills, and experience.",
  keywords: ["Shaik Abdul Rahamtulla", "Software Engineer", "Machine Learning", "MERN Stack", "React", "Java", "Python", "VIT AP"],
  authors: [{ name: "Shaik Abdul Rahamtulla" }],
  openGraph: {
    title: "Shaik Abdul Rahamtulla | Portfolio",
    description: "B.Tech Computer Science student specializing in AI/ML & Full-Stack Web Development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-brand-bg text-brand-text min-h-full flex flex-col font-sans selection:bg-brand-primary/30 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


