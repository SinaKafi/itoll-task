import localFont from "next/font/local";
import Header from "../template/Header";
import Footer from "../template/Footer";
import RegisterServiceWorker from "../serviceWorker/register";

const geistSans = localFont({
  src: "../../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" href="/icon/icon-192-192.png" />
      </head>
      <body className="flex flex-col w-full min-h-screen">
        <Header />
        <RegisterServiceWorker />

        <main className="flex-grow mt-16 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
