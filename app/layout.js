import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geeyem",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html className=" scroll-smooth" lang="en">
      
      <body className={inter.className}>
      <div className="bg-red-50">
      <Header/>
        {children}
        <Footer/>
        </div>
      </body>
     </html>
  );
}
