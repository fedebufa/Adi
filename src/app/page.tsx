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
      <ServiceCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkxeRvc-9eKlHaNhM2ajAGaEHhB7zhe9gcg&s" 
      title="Assistenza di Base" 
      description="
      Support nelle attivita quotidiane come igiene personale, vestizione, 
      mobilizzazione e alimentazione.
      I nostri OSS sono formati per garantire dignità e rispetto durante tutte
      le attivita assistenziali
      "/>

      <ServiceCard img="https://thumbs.dreamstime.com/b/gruppo-di-infermiere-118729172.jpg"
      title="Assistenza Sanitaria"
      description="monitoraggio dei parametri vitali, 
      gestione delle terapie farmacologiche, 
      prevenzione delle lesioni da decubito e 
      assistenza post-operatoria.
      Collaboriamo con medici e infermieri per garantire continuita assistenziale"
      />


      <ServiceCard img="https://c8.alamy.com/compit/d672e9/gruppo-di-mani-lavoro-di-squadra-amore-familiare-supporto-aiuto-della-carita-d672e9.jpg"
       title="Supporto Familiare"
       description="Formazione e supporto ai familiari,
       servizi di sollievo per i cargiver e assistenza organizzata domestica.
        Vi aiutiamo a gestire meglio il carico assistenziale quatidiano"
      />


      <ServiceCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VeLhhWF0stKV3f8HPSzL58jfYEBW77V02A&s"
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
