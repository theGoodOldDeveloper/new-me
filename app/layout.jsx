import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Kira's",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
        <link rel="icon" href="/icon.svg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="h-full w-full ">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
