import { BtnHeader } from '../BtnHeader/BtnHeader'
import './Header.css'

export const Header=()=>{
    return(
        <section className="container-header">
            <h1>Assistenza Domiciliare Professionale Ragusa</h1>
            <p>Operatori Socio-Sanitari qualificati al vostro servizio per 
                garantire la migliore assistenza ai vostri cari, nel
                comfort della loro casa
            </p>
            <BtnHeader/>
        </section>
    )
}