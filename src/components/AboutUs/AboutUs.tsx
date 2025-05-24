import './AboutUs.css'
import Image from 'next/image'

export const AboutUs = () => {
    return (
        <section id='chisiamo' className='container-aboutUs'>
            <h2>Chi Siamo</h2>
            <p>Assistenza Domiciliare Ragusa è un’organizzazione di Operatori Socio-Sanitari 
                con esperienza nel settore dell&apos;assistenza alla persona.
                Nasciamo dalla passione di prendersi cura degli altri e dalla convinzione che ogni persona meriti 
                un&apos;assistenza personalizzata di qualità nel proprio ambiente domestico.
                I nostri operatori sono selezionati con cura, costantemente aggiornati e supervisionati per 
                garantire standard assistenziali elevati.
                Collaboriamo con medici, infermieri e altre figure sanitarie per offrire un servizio
                completo e integrato. Serviamo l&apos;intera provincia di Ragusa con professionalità, empatia e disponibilità
                24 ore su 24, 7 giorni su 7.
            </p>

            <Image 
                src="/logo.jpg" 
                alt="Gruppo di medici" 
                width={500} 
                height={300} 
            />
        </section>
    )
}
