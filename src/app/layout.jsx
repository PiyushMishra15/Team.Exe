// app/layout.js or app/layout.tsx

import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footerr from "../components/Footer";

export const metadata = {
  title: "Team .Exe", // Updated title here
  description:
    "Team .Exe is a dynamic technical team from NIT Hamirpur, focused on innovation, technology, and real-world impact.",
  keywords: [
    "Team .Exe",
    "tech team",
    "developers",
    "projects",
    "programming",
    "college tech club",
    "NIT Hamirpur",
    "innovation",
    "technology",
    "student-led team",
  ],
  authors: [{ name: "Team .Exe" }],
  creator: "Team .Exe",
  metadataBase: new URL("https://teamexe.tech"),
  openGraph: {
    title: "Team .Exe", // Updated here
    description:
      "Discover Team .Exe – a passionate technical team from NIT Hamirpur building innovative projects and driving real-world change.",
    url: "https://teamexe.tech",
    siteName: "Team .Exe", // Updated here
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
    title: "Team .Exe", // Updated here
    description:
      "Student-led team from NIT Hamirpur building real-world tech projects and solving real-world problems.",
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
              name: "Team .Exe", // Updated here
              alternateName: "TeamExe NITH", // If you want to keep this as an alternate name
              url: "https://teamexe.tech",
              logo: "https://teamexe.tech/exe1.png", // Ensure the logo is correct
              sameAs: [
                "https://github.com/teamexe",
                "https://instagram.com/teamexe",
                "https://linkedin.com/company/teamexe",
              ],
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
