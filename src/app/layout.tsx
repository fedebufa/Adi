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
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflowY = 'auto';
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
