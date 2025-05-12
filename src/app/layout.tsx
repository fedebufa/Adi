"use client"
import { useEffect,useState } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [openMenu,setOpenMenu]=useState<boolean>(false)
  const handleMenu=()=>{
      setOpenMenu(prev=>!prev)
  
  }
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [openMenu]);


  return (
    <html lang="en">
      <body>
        <NavBar openMenu={openMenu} setMenu={handleMenu}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
