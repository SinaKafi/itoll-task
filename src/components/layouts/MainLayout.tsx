import localFont from "next/font/local";
import Header from "../template/Header";
import Footer from "../template/Footer";

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
      <body className="flex flex-col w-full min-h-screen">
        <Header />
        <main className="flex-grow mt-16 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
