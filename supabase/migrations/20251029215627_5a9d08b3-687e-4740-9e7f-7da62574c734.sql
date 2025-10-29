-- Update Vilamoura
UPDATE destinations SET
  historical_context = 'Vilamoura is een modern luxe resort ontwikkeld in de jaren 60 op de plaats van een Romeinse nederzetting. Cerro da Vila toont de Romeinse ruïnes. De marina is een van de grootste en modernste van Europa met 1000 aanlegplaatsen. Het gebied is nu synoniem met golf, luxe en moderne Algarve lifestyle.',
  beach_guides = 'Praia de Vilamoura: Lang breed strand met alle faciliteiten en strandclubs. Praia da Falésia Nascente: Spectaculair strand met rode kliffen oostelijk deel. Beach clubs: NoSoloÁgua en Bora Bora Beach voor luxe strandervaring.',
  attractions = 'Marina de Vilamoura met winkels en restaurants. Cerro da Vila Romeinse ruïnes en museum. 5 wereldklasse golfbanen. Casino Vilamoura. Watersport center met alle activiteiten. Helikopter tours boven kust.',
  dining_scene = 'Willie''s voor steaks aan de marina. Akvavit voor Scandinavische vis. Thai Beach Club voor Aziatisch. Purobeach Restaurant voor mediterrane fusion. Bovino Steakhouse voor premium vlees.',
  transportation = 'Bus vanuit Faro: €5, 45 minuten. Golf buggy huren voor resort €40/dag. Gratis shuttle binnen resort. Watertaxi naar nabije stranden. Luxe taxi service beschikbaar.',
  budget_tips = 'Eet bij Quarteira vismarkt 10 min rijden voor goedkope vis. Supermarkt Continente in Quarteira. Gratis strand zonder beach club kosten. Golf tijdens twilight uren voor korting.',
  hidden_gems = 'Quarteira vismarkt vroeg in de ochtend. Loulé markt zaterdag 20 minuten rijden. Pine Cliffs strand via lift door kliffen. Praia dos Tomates klein lokaal strand.',
  best_time_to_visit = 'Maart-Juni & September-November',
  visitor_count = '200.000',
  best_for = ARRAY['Luxe', 'Golf', 'Marina', 'Families']
WHERE slug = 'vilamoura';

-- Update Faro
UPDATE destinations SET
  historical_context = 'Faro is de historische hoofdstad van de Algarve sinds 1756. De stad heeft Romeinse, Moorse en christelijke invloeden. De oude binnenstad Cidade Velha ligt beschermd binnen middeleeuwse muren. De kathedraal is gebouwd op de fundamenten van een Romeinse tempel en later een moskee.',
  beach_guides = 'Praia de Faro: Lang strand op schiereiland verbonden met vasteland. Ilha Deserta: Onbewoond eiland bereikbaar per boot, meest zuidelijke punt. Ilha da Culatra: Authentiek visserseiland zonder auto''s. Ilha da Barreta perfecte rust.',
  attractions = 'Cidade Velha met kathedraal en bisschoppelijk paleis. Ria Formosa natuurpark boottrips. Museu Municipal voor regionale geschiedenis. Centro Ciência Viva wetenschapsmuseum. Forum Algarve shopping mall. Bones Chapel Igreja do Carmo.',
  dining_scene = 'Faz Gostos voor innovatieve vis. Ria Formosa restaurant voor lokale specialiteiten. Estaminé op Ilha Deserta voor lunch. Tertúlia Algarvia voor traditioneel. Columbus Lounge Bar voor cocktails.',
  transportation = 'Luchthaven binnen stad 10 minuten. Trein en bus connecties naar alle Algarve. Lokale bus naar strand €2. Boot naar eilanden €5-10. Fietsen huren perfect voor vlak terrein €8/dag.',
  budget_tips = 'Municipal markt voor goedkope maaltijden vanaf €5. Gratis musea bezoeken eerste zondag maand. Eet in binnenstad weg van toerist routes. Student kortingen beschikbaar in veel plekken.',
  hidden_gems = 'Palácio Belmarço verborgen tuin. Ermida de Santo António do Alto voor panorama. Faro Jewish Heritage Center. Passeio Ribeirinho wandelpromenade langs lagune.',
  best_time_to_visit = 'Maart-Juni & September-Oktober',
  visitor_count = '180.000',
  best_for = ARRAY['Cultuur', 'Stad', 'Natuur', 'Airport']
WHERE slug = 'faro';

-- Update Portimão
UPDATE destinations SET
  historical_context = 'Portimão was de belangrijkste visserijhaven van de Algarve, bekend voor sardine en tonijn industrie. De oude visconservenfabrieken zijn nu getransformeerd tot Museu de Portimão. De stad herbouwde na de verwoestende aardbeving van 1755. Nu is het een moderne stad met belangrijke haven en industriecentrum.',
  beach_guides = 'Praia da Rocha: Iconisch breed strand met gouden kliffen en strandclubs. Praia dos Três Irmãos: Familie strand met rotsformaties. Praia do Vau: Rustiger alternatief met golden sand. Praia da Marinha 15 min rijden meest fotogeniek.',
  attractions = 'Museu de Portimão in oude visfabriek. Riverfront promenade langs Arade rivier. Portimão Arena voor evenementen. Autódromo Internacional do Algarve racecircuit. Boattrips naar Benagil grotten. Shopping bij Aqua shopping center.',
  dining_scene = 'Dona Barca voor gegrilde sardines aan rivier. Taberna da Maré voor seafood cataplana. NoSoloÁgua beach restaurant. A Casa do João Leitão voor kip piri-piri. O Casarão voor traditioneel.',
  transportation = 'Trein vanuit Faro: €6, 1 uur. Lokale bus naar Praia da Rocha €2. Gratis parking bij rivier. Water taxi naar Ferragudo €3. Fietsen lastig door heuvels.',
  budget_tips = 'Lunch menu deals €8-12 in centrum. Continente supermarkt bij rivier. Bezoek lokale markt maandag voor verse vis. Gratis parkeren na 19:00.',
  hidden_gems = 'Ferragudo dorp aan overkant rivier met authentieke charme. Alcalar prehistoric tombs 15 min rijden. Silves kasteel 20 minuten rijden. Rocha beach bij zonsopgang zonder menigte.',
  best_time_to_visit = 'April-Juni & September-Oktober',
  visitor_count = '220.000',
  best_for = ARRAY['Strand', 'Stad', 'Nachtleven', 'Vis']
WHERE slug = 'portimao';