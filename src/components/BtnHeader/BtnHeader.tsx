import { FaWhatsapp } from 'react-icons/fa';
import './BtnHeader.css'

export const BtnHeader=()=>{
    return(
      <>
      <section className='container-btn'>

      <button className='btn-header'><a href="#contatti">Richiedi Informazioni</a></button>
   
      <button className='btn-header'> <a
            href="https://wa.me/391234567890" // Inserisci qui il tuo numero con prefisso internazionale, senza "+" o spazi
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Contattaci su What's App
            <FaWhatsapp size={16} />
          
          </a></button>
      </section>
      
      </>
    )
}