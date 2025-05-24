import './Contact.css'

export const Contact = () => {
  return (
    <section id="contatti" className="container-contact">
      <h2>Contattaci</h2>
      <p>
        Siamo a tua disposizione per fornirti tutte le informazioni sui nostri
        servizi e per creare un piano assistenziale personalizzato.
      </p>

      <h3>Informazioni di Contatto</h3>
      <address>
        <ul>
          <li>Ragusa</li>
          <li><strong>Telefono:</strong> +39 3701243914</li>
          <li><strong>Email:</strong> <a href="mailto:info@assistenza.it">info@assistenza.it</a></li>
          <li><strong>Orari:</strong> Lunedì - Venerdì: 9:00 - 18:00, Sabato: 9:00 - 12:00</li>
        </ul>
      </address>

      <p>
  Il servizio di assistenza è attivo 24 ore su 24, tutti i giorni dell&apos;anno. Non esitare a contattarci anche per emergenze.
</p>

    </section>
  );
};
