"use client"
import { FC, useEffect, useState} from 'react';
import './NavBar.css'
import { FaBars,FaTimes,FaWhatsapp,FaFacebook } from "react-icons/fa";


interface NavBarProps{
    openMenu: boolean
    setMenu: ()=> void
}


export const NavBar:FC<NavBarProps>=({openMenu,setMenu})=>{



    return(
        <nav>
            <ul className='menu'>
                <li ><a href="/"><img className='logo' src='./logo.jpg' alt="" /></a></li>
                <a className='right'
      href="https://wa.me/391234567890" // Inserisci qui il tuo numero con prefisso internazionale, senza "+" o spazi
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
             
         
                <li><a href="/">Home</a></li>
                <li><a onClick={setMenu} href="#servizi">Servizi</a></li>
                <li><a onClick={setMenu} href="#contatti">Contatti</a></li>
                <li><a onClick={setMenu} href="#chisiamo">Chi Siamo</a></li>
            </ul>
        </nav>
    )
}