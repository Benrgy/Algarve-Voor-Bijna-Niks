import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    id: "faq-1",
    question: "Wat zijn de goedkoopste maanden voor een Algarve vakantie?",
    answer: "De goedkoopste maanden voor de Algarve zijn oktober-maart, met uitzondering van de kerstvakantie. In deze periode vind je hotels tot 70% goedkoper dan in de zomermaanden. Vooral november en februari bieden fantastische deals met nog steeds aangenaam weer (15-20°C)."
  },
  {
    id: "faq-2", 
    question: "Hoe vind ik last minute deals voor de Algarve?",
    answer: "Voor de beste last minute deals naar de Algarve: 1) Boek 1-3 dagen voor vertrek, 2) Wees flexibel met data en vluchttijden, 3) Kijk naar pakketdeals die vaak voordeliger zijn dan los boeken, 4) Meld je aan voor price alerts bij vergelijkingssites. Dinsdag en woensdag zijn vaak de goedkoopste vertrekdagen."
  },
  {
    id: "faq-3",
    question: "Wat kost een week Algarve vakantie gemiddeld?",
    answer: "Een budgetweek Algarve kost vanaf €300 per persoon (hostel + eigen vervoer), middensegment €500-800 (3* hotel + vluchten), en luxe vanaf €1200 (4-5* resort all-inclusive). Gezinnen kunnen vanaf €800 voor 4 personen een complete week wegblijven bij slimme planning."
  },
  {
    id: "faq-4",
    question: "Zijn all-inclusive deals in de Algarve de moeite waard?",
    answer: "All-inclusive in de Algarve is vooral voordelig als je van zwembadvakanties houdt en veel drinkt. Voor cultuurliefhebbers die lokaal willen eten is half pension + eigen ontdekkingen vaak goedkoper en authentieker. Vergelijk altijd totaalprijs inclusief drankjes vs. lokale restaurantprijzen."
  },
  {
    id: "faq-5", 
    question: "Welke Algarve stranden zijn het best voor gezinnen?",
    answer: "Top gezinsstranden Algarve: Praia da Rocha (vele voorzieningen), Meia Praia Lagos (kalm water), Praia de Faro (easy parking), en Quarteira (kinderactiviteiten). Deze stranden hebben reddingsdiensten, toiletten, restaurants en zijn goed bereikbaar met de auto."
  },
  {
    id: "faq-6",
    question: "Is het goedkoper om een huurauto te nemen in de Algarve?",
    answer: "Een huurauto loont vanaf 4+ dagen, vooral als je meerdere plaatsen wilt bezoeken. Kostenvergelijking: huurauto €15-25/dag vs. taxi's €2-4/km. Voor strandvakanties op 1 locatie volstaan vaak bussen (€2 per rit) of hotel-shuttles. Boek huurauto's vroeg voor beste prijzen."
  },
  {
    id: "faq-7",
    question: "Wat zijn de goedkoopste vluchten naar Faro Airport?", 
    answer: "Goedkoopste vluchten naar Faro: Ryanair en Transavia vanaf €40-90 retour (afhankelijk van seizoen). Boek 6-8 weken vooruit voor beste prijzen. Alternatief zijn vluchten naar Sevilla (Spanje) + 2 uur rijden, vaak €50-100 goedkoper maar inclusief huurauto/transfer kosten berekenen."
  },
  {
    id: "faq-8",
    question: "Welke budget accommodaties zijn aan te raden in de Algarve?",
    answer: "Budget opties: Hostels in Lagos/Faro (€15-25/nacht), Airbnb appartementen (€30-60/nacht), 2-3* hotels buiten centrum (€40-80/nacht), en campings met bungalows (€25-45/nacht). Boek accommodatie 1-2 km van strand voor beste prijs-kwaliteit verhouding."
  },
  {
    id: "faq-9",
    question: "Wanneer is het te koud voor een strandvakantie in de Algarve?",
    answer: "December-februari zijn te koud voor strandvakanties (lucht 15-17°C, water 16°C). Maart-mei en oktober-november zijn perfect voor wandelingen en sightseeing (18-23°C) maar zwemmen is fris. Juni-september zijn ideaal voor strandvakanties met temperaturen van 25-30°C en water rond 20-23°C."
  },
  {
    id: "faq-10",
    question: "Wat zijn geheime budget tips voor de Algarve?",
    answer: "Insider budget tips: 1) Eet bij 'tascas' (lokale kroegjes) €8-12 vs. toeristische restaurants €20-30, 2) Koop verse vis direct bij vissershaven, 3) Gebruik gratis wifi + WhatsApp voor contact, 4) Bezoek gratis strand-bars tijdens happy hour, 5) Wandel de kustpaden (gratis) in plaats van betaalde excursies."
  }
];

const AlgarveFAQ: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Veelgestelde Vragen over Goedkope Algarve Vakanties
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles wat je moet weten om de perfecte budgetvakantie naar de Algarve te plannen
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-card rounded-lg border-0 shadow-soft px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AlgarveFAQ;