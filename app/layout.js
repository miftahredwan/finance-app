
// import localFont from "next/font/local";
import "./globals.css";
import useServerDarkMode from "@/app/hooks/use-server-dark-mode"

import { Inter } from 'next/font/google';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: {
    template: "%s | Finance App",
    default: "Finance App",
  },
  description: "Generated by create next app",
  
}
export default function RootLayout({ children }) {
  
  const theme = useServerDarkMode()
  return (
    <html lang="en" className={theme}>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} size-full antialiased  min-h-screen flex flex-col px-8 `}
      >
        {children}
      </body> */}
<head>
        <link rel="icon" href="/business-finance-money-svgrepo-com (1).png"/>
      </head>

<body className={`${inter.className} min-h-screen flex flex-col px-8`}>{children}</body>

 {/* <body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body> */}


    </html>
  );
}
