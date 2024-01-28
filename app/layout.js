import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: "Tourista | User",
  description: "Tourista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
