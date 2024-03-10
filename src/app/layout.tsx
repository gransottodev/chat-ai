import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Ai",
  description: "Chat bot with vercel sdk and open ai chatgpt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/openai.ico" sizes="any" />
      </head>
      <body className={jetBrains.className}>{children}</body>
    </html>
  );
}
