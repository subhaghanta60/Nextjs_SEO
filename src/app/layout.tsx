import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SEO APP",
  description: "We are SEO Agency.Which Helps use bussiness to grow on google",
  keywords: "SEO Agency,Seo Friendly,Company,Nextjs,ReactJs",
  openGraph: {
    title:"SEO APP",
    description:"We are SEO Agency.Which Helps use bussiness to grow on google",
    images:["https://images.pexels.com/photos/19119918/pexels-photo-19119918/free-photo-of-portrait-of-man-wearing-white-shirt-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],
    url:"https://www.xyz.com"
  },
  twitter: {
    title:"SEO APP",
    description:"We are SEO Agency.Which Helps use bussiness to grow on google",
    images:["https://images.pexels.com/photos/19119918/pexels-photo-19119918/free-photo-of-portrait-of-man-wearing-white-shirt-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],
    card:"summary_large_image",
    creator:"xyz"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
