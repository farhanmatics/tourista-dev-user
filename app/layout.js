import { ClerkProvider } from "@clerk/nextjs";
import { Onest } from "next/font/google";
import "./globals.css";

import { AppProvider } from "../contexts/AppContext";

const onest = Onest({ subsets: ["latin"], display: 'swap', adjustFontFallback: false});

export const metadata = {
  title: "Tourista | User",
  description: "Tourista user platform",
  "shortcut icon": "https://tourista.co/img/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppProvider>
        <html lang="en">
          <head>
            <link
              rel="shortcut icon"
              href="https://tourista.co/img/favicon.ico"
            />
          </head>
          <body className={onest.className}>{children}</body>
        </html>
      </AppProvider>
    </ClerkProvider>
  );
}
