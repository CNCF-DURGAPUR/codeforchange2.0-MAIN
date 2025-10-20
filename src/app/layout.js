import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";
import SplashScreen from "./SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

export const metadata = {
  title: "Code CrestZ",
  description: "Welcome to Code CrestZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased`} suppressHydrationWarning>
        <SplashScreen>
          {children}
        </SplashScreen>
      </body>
    </html>
  );
}
