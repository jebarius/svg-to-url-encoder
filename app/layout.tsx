import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import "./globals.css";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SVG To CSS Converter",
  description: "SVG To CSS Converter is a utility that transforms SVG code into a Data URI, which is a URL format encoded for direct usage as a background-image source.",
};


let isLocalhost = true;
if (typeof window !== 'undefined') {
  isLocalhost = window.location.hostname.includes('localhost');
  
}
console.log('Is localhost:', isLocalhost);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
        <body className={roboto.className}>
          {children}
          
        </body>
    </html>
  );
}
