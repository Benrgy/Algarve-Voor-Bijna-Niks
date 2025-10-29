-- Update Praia da Rocha
UPDATE destinations SET
  historical_context = 'Praia da Rocha was een van de eerste stranden van de Algarve die ontwikkeld werd voor toerisme in de jaren 30. De naam betekent letterlijk "Rotsstrand" vanwege de spectaculaire gouden rotsformaties. Het gebied was favoriet bij Portugese elite voor kustvakanties. Nu is het een levendig resort.',
  beach_guides = 'Praia da Rocha: 1,5 km breed gouden strand met iconische kliffen. Praia dos Três Castelos: Oostelijk deel rustiger. Beach clubs: NoSoloÁgua en Katedral voor party sfeer. Naturist gebied in westen.',
  attractions = 'Fortaleza de Santa Catarina fort aan haven ingang. Boardwalk langs strand met restaurants en bars. Casino de Portimão. Watersport activiteiten uitgebreid. Nachtclubs en bars strip. Arade rivier promenade.',
  dining_scene = 'Safari Restaurant voor African fusion. Fortaleza kwaliteit seafood met fort uitzicht. Titanic beach restaurant. NoSoloÁgua beach club dining. Churrasqueira Bela Vista voor budget.',
  transportation = 'Bus vanuit Portimão centrum: €2, 10 minuten. Wandelen vanaf Portimão 25 min langs rivier. Gratis parking achter strand moeilijk in zomer. Taxi €8 vanaf treinstation. Verhuur steps en bikes.',
  budget_tips = 'Koop drinken bij supermarkt Continente in Portimão voor strand. Lunch menu deals weg van strandzijde €8-12. September tot mei 60% lagere hotel prijzen. Happy hours bij beach bars 17:00-19:00.',
  hidden_gems = 'Sunrise walk aan lege strand. Rotsformaties bij laag tij exploreren. Miradouro panorama punt boven strand. Vau beach 5 min rijden veel rustiger.',
  best_time_to_visit = 'Mei-September',
  visitor_count = '280.000',
  best_for = ARRAY['Nachtleven', 'Strand', 'Families', 'Koppels']
WHERE slug = 'praia-da-rocha';

-- Update Alvor
UPDATE destinations SET
  historical_context = 'Alvor was een belangrijk Romeinse nederzetting en later vissersdorp. De Moorse invloed is nog zichtbaar in smalle straatjes. In 1755 werd het dorp verwoest door aardbeving en tsunami. Het Ria de Alvor natuurreservaat is cruciaal voor migrerende vogels. Het behield zijn authentieke visserscharme.',
  beach_guides = 'Praia de Alvor: Breed beschut strand bij lagune met kalm water ideaal families. Três Irmãos: Strand met rotsformaties en grotten. Praia do Alvor Nascente: Lang strand richting Portimão. Boardwalk verbindt stranden.',
  attractions = 'Ria de Alvor natuurreservaat met wandelpaden en vogels. Igreja Matriz de Alvor manueline kerk. Oude visserswijk met witte huisjes. Alvor boardwalk langs lagune. Kasteel ruïnes. Boottrips naar Benagil.',
  dining_scene = 'Restaurante Ruccula fine dining met uitzicht. Canico seafood aan havenplein. Tasca do Kiko voor tapas. Casa Alvor budget vis. Gelados Alvor voor ambachtelijk ijs.',
  transportation = 'Bus vanuit Portimão: €2, 15 minuten. Parking gratis buiten centrum. Water taxi naar Portimão in zomer €3. Fietsen huren langs boardwalk. Wandelbaar dorp.',
  budget_tips = 'Lokale tascas weg van hoofdstraat voor budget maaltijden €7. Intermarché supermarkt voor picknick. Gratis parking bij sportcentrum. Alvor market dinsdag voor verse producten goedkoop.',
  hidden_gems = 'Três Irmãos grotten bij laag tij exploreren. Abicada archaeological site 5 min rijden. Ria walking trail vogels spotten. Sunset vanaf castell ruins.',
  best_time_to_visit = 'April-Juni & September-Oktober',
  visitor_count = '140.000',
  best_for = ARRAY['Families', 'Natuur', 'Authentiek', 'Vogels']
WHERE slug = 'alvor';

-- Update Luz
UPDATE destinations SET
  historical_context = 'Praia da Luz was een klein wit vissersdorp totdat het ontdekt werd als badplaats. De zwarte rots (Rocha Negra) gaf het gebied zijn naam "licht". In 1755 verwoestte de tsunami het oude dorp. Igreja da Luz is herbouwd in 16e eeuw stijl. Romeinse villa ruïnes tonen vroege bewoning.',
  beach_guides = 'Praia da Luz: Breed familievriendelijk strand met kalm water en alle faciliteiten. Zwarte rots aan westelijke kant iconisch. Porto de Mós 15 min rijden wild alternatief. Beach restaurants en bars.',
  attractions = 'Igreja da Luz whitewashed kerk. Romeinse villa museum en ruïnes. Rocha Negra zwarte rots formatie. Coastal walks naar Lagos. Watersport centrum met kajak en SUP. Kids beach club.',
  dining_scene = 'The Dolphin restaurant vers vis aan strand. A Forja steak house. Aqui d''el Rei Portuguese. Bull & Bush Brits pub favoriet. Gelados & Companhia voor ijs.',
  transportation = 'Bus vanuit Lagos: €3, 20 minuten. Huurauto handig voor flexibiliteit. Gratis parkeren rond strand. Taxi Lagos €15. Fietsen huren maar heuvelachtig naar Lagos.',
  budget_tips = 'Appartement huren zelf koken bespaart veel. Intermarhé supermarkt in dorp. Lunch menu deals €9-12. Lagos bezoeken met bus goedkoper dan eten in Luz. September-mei lagere prijzen.',
  hidden_gems = 'Burgau village 10 min rijden authentiek. Cabanas Velhas ruins langs klif wandeling. Roman villa gratis toegang. Early morning strand leeg en prachtig.',
  best_time_to_visit = 'Mei-Juni & September',
  visitor_count = '110.000',
  best_for = ARRAY['Families', 'Expats', 'Rust', 'Strand']
WHERE slug = 'luz';