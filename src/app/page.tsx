import { Header } from "@/components/Header/Header";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { ServiceSection } from "@/components/ServiceSection/ServiceSection";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Contact } from "@/components/Contact/Contact";
import { FormContact } from "@/components/FormContact/FormContact";

export default function Home() {
  return (
   <main>
    <Header/>
    <ServiceSection/>
    <section>
      <ServiceCard img="/logo.jpg" 
      title="Assistenza di Base" 
      description="
      Supporto nelle attivita quotidiane come igiene personale, vestizione, 
      mobilizzazione e alimentazione.
      I nostri OSS sono formati per garantire dignità e rispetto durante tutte
      le attivita assistenziali
      "/>

      <ServiceCard img="/logo.jpg"
      title="Assistenza Sanitaria"
      description="monitoraggio dei parametri vitali, 
      gestione delle terapie farmacologiche, 
      prevenzione delle lesioni da decubito e 
      assistenza post-operatoria.
      Collaboriamo con medici e infermieri per garantire continuita assistenziale"
      />


      <ServiceCard img="/logo.jpg"
       title="Supporto Familiare"
       description="Formazione e supporto ai familiari,
       servizi di sollievo per i cargiver e assistenza organizzata domestica.
        Vi aiutiamo a gestire meglio il carico assistenziale quatidiano"
      />


      <ServiceCard img="/logo.jpg"
      title="Assistenza sociale"
      description="Mantenimento delle relazioni sociali,
      accompagnamento per visite mediche e attività ricreative. Promoviamo l'inclusione 
      sociale e il benessere psicologico dei nostri assistiti"
      />
    </section>

    <AboutUs/>
    <Contact/>
    <FormContact/>
   </main>
  );
}
