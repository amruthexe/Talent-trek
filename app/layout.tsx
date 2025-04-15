/* eslint-disable no-undef */
/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // <-- Added icons
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talent Trek",
  description: "talent trek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>Talent Trek | Learn Web Development Online</title>
<meta name="description" content="Join Talent Trek – an edtech startup offering affordable online courses in coding, web development, and future-ready skills. Start learning today." />
<meta property="og:title" content="Talent Trek | Learn Web Development Online" />
<meta property="og:description" content="Talent Trek is your go-to e-learning platform for mastering coding and tech skills with real-world projects and expert mentors." />
<meta property="og:image" content="https://yourcdn.com/og-image.jpg" />

    <body className={cn("min-h-screen", inter.className)}>


   <div className="pt-4  "> 
   <div className="absolute inset-0 z-100 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" /> 
    <Navbar />
    <div className="absolute inset-0 z-100 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" /> 
    </div>
        
         


          {children}

          <div className="fixed bottom-8 right-8 md:bottom-4 md:right-4 flex flex-col gap-3 items-center z-50">
            <Link href="tel:+917892793203">
              <div className="bg-blue-950 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">
                <FaPhoneAlt size={20} />
              </div>
            </Link>

            

          
            <Link
              href="https://wa.me/919848814614?text=I%20am%20interested"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all animate-blink">
                <FaWhatsapp size={20} />
              </div>
            </Link>
          </div>
      </body>
    </html>
  );
}
