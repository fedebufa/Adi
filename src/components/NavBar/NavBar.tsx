"use client"
import { FC } from 'react';
import './NavBar.css'
import Link from 'next/link';
import Image from 'next/image';
import { FaBars,FaTimes,FaWhatsapp,FaFacebook } from "react-icons/fa";


interface NavBarProps{
    openMenu: boolean
    setMenu: ()=> void
}


export const NavBar:FC<NavBarProps>=({openMenu,setMenu})=>{



    return(
        <nav>
            <ul className='menu'>
                <li ><Link href="/"><Image src="/logo.jpg" width={100} height={80} alt="Logo" /> </Link></li>
                <a className='right'
      href="https://wa.me/393701243914" // Inserisci qui il tuo numero con prefisso internazionale, senza "+" o spazi
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#25D366', textDecoration: 'none' }}
    >
      <FaWhatsapp size={22} />
    
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <FaFacebook size={22} color="#1877F2" />
     </a>
               {!openMenu?
               <li onClick={setMenu}><FaBars size={22}/></li>
               :
               <li onClick={setMenu}><FaTimes size={22}/></li> } 
            </ul>
            <ul className={openMenu?'open':'list-menu'}>
             
         
                <li><Link href="/">Home</Link></li>
                <li><a onClick={setMenu} href="#servizi">Servizi</a></li>
                <li><a onClick={setMenu} href="#contatti">Contatti</a></li>
                <li><a onClick={setMenu} href="#chisiamo">Chi Siamo</a></li>
            </ul>
        </nav>
    )
}