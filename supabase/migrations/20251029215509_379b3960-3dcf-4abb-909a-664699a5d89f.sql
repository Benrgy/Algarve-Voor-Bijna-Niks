-- Update Albufeira met volledige informatie
UPDATE destinations SET
  historical_context = 'Albufeira was ooit een traditioneel vissersdorp voordat het uitgroeide tot een van de meest populaire badplaatsen van Portugal. De oude stad behoudt nog steeds zijn Moorse charme met witte huisjes en smalle straatjes die naar de oceaan leiden. De naam komt van het Arabische "Al-Buhera" wat kasteel op de zee betekent.',
  beach_guides = 'Praia dos Pescadores (Vissersstrand): Het centrale strand met traditionele boten. Praia da Oura: Levendig strand met waterports en strandclubs. Praia da Falésia: 6 km lang strand met rode kliffen. Praia de São Rafael: Klein strand tussen rotsen met grotten.',
  attractions = 'De oude stad met zijn authentieke straatjes en pleintjes. Marina van Albufeira met restaurants en boottrips. Zoomarine aquapark met shows en zwemmen met dolfijnen. Strip van Albufeira voor nachtleven.',
  dining_scene = 'Vila Joya (2 Michelin sterren) voor fine dining. Os Arcos Velhos voor traditionele Portugese keuken. A Ruina I voor verse vis op het strand. Dom Carlos voor cataplana. Churrasqueira O Teodósio voor grillgerechten.',
  transportation = 'Bus vanuit Faro: €5, 1 uur. Lokale bussen verbinden alle stranden. Taxi''s zijn beschikbaar maar duur. Huurauto aangeraden voor flexibiliteit. Fietsen huren voor korte afstanden.',
  budget_tips = 'Vermijd strand restaurants, eet in de oude stad voor betere prijzen. Koop picknick bij Pingo Doce supermarkt. Bezoek tijdens laagseizoen (oktober-mei) voor 50% korting. Gratis parking bij Praia da Oura vroeg in de ochtend.',
  hidden_gems = 'Praia da Coelha: Klein rustig strand tussen Albufeira en Vilamoura. Paderne Kasteel: Verlaten Moors kasteel 15 min rijden. Algibre hiking trail met oceaanzicht. Alto do Poco restaurant in het binnenland.',
  best_time_to_visit = 'April-Juni & September-Oktober',
  visitor_count = '300.000',
  best_for = ARRAY['Strand', 'Nachtleven', 'Families', 'Watersport']
WHERE slug = 'albufeira';

-- Update Lagos met volledige informatie
UPDATE destinations SET
  historical_context = 'Lagos speelde een cruciale rol in de Portugese ontdekkingsreizen. Van hier vertrok Gil Eanes in 1434 als eerste Europeaan voorbij Kaap Bojador. De stad heeft een rijke geschiedenis met de slavenhandel, zichtbaar in het oude slavenmarkt gebouw. De stadsmuren en forten getuigen van het strategische belang.',
  beach_guides = 'Praia Dona Ana: Iconisch strand met gouden rotsen. Meia Praia: 4 km lang strand perfect voor kitesurfen. Praia do Camilo: Klein strand bereikbaar via 200 treden. Praia da Luz: Familiestrand met alle faciliteiten.',
  attractions = 'Ponta da Piedade: Spectaculaire rotsformaties en grotten. Fort Ponta da Bandeira met maritiem museum. Oude binnenstad met stadsmuren. Igreja de Santo António met gouden interieur. Kajakken en boottours naar grotten.',
  dining_scene = 'Casinha do Petisco voor tapas en wijnen. Adega da Marina voor traditionele vis. The Grill voor steaks. Nah Pra La voor moderne Portugese fusion. Gelato Corner voor authentiek Italiaans ijs.',
  transportation = 'Trein vanuit Faro: €6, 1,5 uur. Lokale bussen naar stranden €2-3. Elektrische step huren voor €20/dag. Watertaxi naar Alvor in zomer. Fietsen beschikbaar maar heuvelachtig.',
  budget_tips = 'Lunch deal bij vele restaurants €7-10. Minipreço supermarkt voor goedkope boodschappen. Gratis wandelen bij Ponta da Piedade vanaf parkeerplaats. Bezoek woensdag lokale markt voor verse producten.',
  hidden_gems = 'Praia do Pinhão: Verborgen strand via kliftop pad. Burgau: Authentiek vissersdorp 15 min rijden. Lighthouse hike met zonsondergang. Alto restaurant met panorama uitzicht.',
  best_time_to_visit = 'Mei-Juni & September',
  visitor_count = '250.000',
  best_for = ARRAY['Natuur', 'Geschiedenis', 'Avontuur', 'Koppels']
WHERE slug = 'lagos';

-- Update Tavira met volledige informatie
UPDATE destinations SET
  historical_context = 'Tavira is een van de mooiste en meest authentieke steden van de Algarve. De stad heeft 37 kerken en was belangrijk tijdens de Moorse bezetting en later als visserijhaven voor tonijn. De Romeinse brug over de Rio Gilão is het hart van de stad. Tavira behield zijn traditionele karakter en vermeed massa toerisme.',
  beach_guides = 'Ilha de Tavira: Ongerept eiland bereikbaar per boot, 11 km strand. Praia do Barril: Strand met anker kerkhof van oude tonijnvissers. Praia da Terra Estreita: Rustig strand oostelijk op het eiland. Praia de Cabanas: Klein strand bij vissersdorp.',
  attractions = 'Kasteel van Tavira met panorama uitzicht. Camera Obscura voor 360° beeld van de stad. Igreja de Santa Maria do Castelo. Ponte Romana over de rivier. Markt van Tavira voor lokale producten. Zoutpannen van Tavira.',
  dining_scene = 'Aquasul voor moderne vis gerechten. A Ver Tavira voor rooftop dining. Restaurante Bica voor traditionele cataplana. Casa Simão voor petiscos. Patio voor lunch in tuin.',
  transportation = 'Trein vanuit Faro: €3,50, 35 minuten. Boot naar eiland €2 retour. Fietsen huren ideaal voor vlak terrein €10/dag. Lokale bus naar stranden €2. Wandelen in centrum is beste optie.',
  budget_tips = 'Eet bij Mercado Municipal food court vanaf €6. Neem eigen eten naar eiland strand. Bezoek gratis musea op eerste zondag maand. Gratis fado concerten in zomer.',
  hidden_gems = 'Cacela Velha: Wit dorp met lagune uitzicht 20 min rijden. Pedras d''El Rei resort met natuur wandelingen. Ilha de Tavira camping op strand. Salt pans tour bij zonsondergang.',
  best_time_to_visit = 'April-Juni & September-Oktober',
  visitor_count = '120.000',
  best_for = ARRAY['Cultuur', 'Authentiek', 'Natuur', 'Rust']
WHERE slug = 'tavira';