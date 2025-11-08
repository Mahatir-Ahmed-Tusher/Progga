import React from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Progga AI",
  description: "AI-powered learning for Bangladeshi students",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className="tiro-bangla-regular">
      <head>
        <style dangerouslySetInnerHTML={{__html: "@import url('https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&display=swap');"}} />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


