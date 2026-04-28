import "./globals.css";
import Navbar from "@/components/NavBar";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Monika Tamang | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]  text-white antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}