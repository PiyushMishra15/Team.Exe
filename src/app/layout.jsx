// app/layout.js or app/layout.tsx

import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footerr from "../components/Footer";

export const metadata = {
  title: "Team .Exe | Innovating the Future",
  description:
    "Team .Exe is a dynamic technical team focused on innovation, technology, and real-world impact.",
  keywords: [
    "Team Exe",
    "tech team",
    "developers",
    "projects",
    "programming",
    "college tech club",
  ],
  authors: [{ name: "Team .Exe" }],
  creator: "Team .Exe",
  metadataBase: new URL("https://teamexe.tech"),
  openGraph: {
    title: "Team .Exe | Innovating the Future",
    description:
      "Discover Team .Exe - a passionate technical team building innovative projects and driving real-world change.",
    url: "https://teamexe.tech",
    siteName: "Team .Exe",
    images: [
      {
        url: "https://teamexe.tech/3.png",
        width: 1200,
        height: 630,
        alt: "Team .Exe Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team .Exe | Innovating the Future",
    description:
      "Student-led team building real-world tech projects and solving real-world problems.",
    images: ["https://teamexe.tech/1.png"],
    creator: "@teamexe",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ Moved viewport to a separate export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Team .Exe",
              url: "https://teamexe.tech",
              logo: "https://teamexe.tech/exe 1.png",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <Footerr />
      </body>
    </html>
  );
}
