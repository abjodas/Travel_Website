import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import MobNavLinks from "@/components/MobNavLinks";


export const metadata: Metadata = {
  title: "Travel Guide",
  description: "Travel UI/UX app for camping",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
       <Footer />
      </body>
    </html>
  );
}
