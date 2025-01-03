import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Reddit_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CircularMenu from "@/components/ui/action-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./provider";

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

const redditSansCondensed = Reddit_Sans_Condensed({
  weight: ["400", "700"], // Specify weights as needed
  style: ["normal"], // Specify styles as needed
  subsets: ["latin"], // Specify subsets if applicable
  variable: "--font-reddit-sans-condensed",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redditSansCondensed.variable} antialiased`}>
        <Provider>{children}</Provider>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BRSFV6Z670"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BRSFV6Z670');
          `}
        </Script>
        <Script id="zoho-salesiq-script" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `}
        </Script>
        <Script
          src="https://salesiq.zohopublic.com/widget?wc=siqa0752c8be10fd2a9c8a8ee410ead149d053833bd70cb502f6d44d629c00581b8"
          strategy="afterInteractive"
        />
        <CircularMenu position="left" />
      </body>
    </html>
  );
}
