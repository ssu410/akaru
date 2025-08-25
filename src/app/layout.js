import "./globals.css";
import { Rubik } from "next/font/google";
import { Header } from "@/components/layout/Header";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
