import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-dark antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
