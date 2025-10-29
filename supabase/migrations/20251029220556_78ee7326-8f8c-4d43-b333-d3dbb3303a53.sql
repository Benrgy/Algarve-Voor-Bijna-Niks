-- Update nog meer populaire bestemmingen

-- Benagil
UPDATE destinations SET
  historical_context = 'Benagil was een klein onbeduidend vissers dorpje totdat de spectaculaire grot wereldberoemd werd via social media. De grot werd gevormd door erosie van de zee. Het dorp zelf blijft authentiek met enkele vissers families. De naam komt van beni (zoon van) en agil een Moorse voornaam.',
  beach_guides = 'Praia de Benagil: Klein strand in beschutte baai perfecte voor kayak lancering naar grot. Praia da Marinha 5 min rijden een van de mooiste stranden van Europa. Strand vaak druk met grot toeristen.',
  attractions = 'Benagil Cave: Iconische grot met natuurlijk daklicht bereikbaar per kayak of paddleboard. Boot tours vanaf meerdere stranden. Seven Hanging Valleys Trail hiking langs kliffen. Grotten verkennen per boot.',
  dining_scene = 'O Pescador seafood beachside. A Barquinha traditioneel vis restaurant. Café e Restaurante Algar local petiscos. Weinig restaurants in klein dorp.',
  transportation = 'Auto essentieel geen openbaar vervoer direct. Parkeren bij strand €5/dag hoogseizoen. Kayak taxi vanaf Carvoeiro €15. Boot trips vanaf meerdere plaatsen €20-30. Wandelen vanaf Carvoeiro 5 km trails.',
  budget_tips = 'Kayak huren goedkoper dan boat tour €20 vs €30. Early morning bezoek minder boten in grot. Parkeren gratis off season. Picknick meenemen weinig eetopties.',
  hidden_gems = 'Benagil grot bij sunset magisch licht. Visit at low tide for beach access inside. Praia do Carvalho hidden beach stairs through tunnel. Algar Seco walk panoramisch.',
  best_time_to_visit = 'April-Juni & September (minder druk)',
  visitor_count = '500.000+ (grot bezoekers)',
  best_for = ARRAY['Fotografie', 'Avontuur', 'Natuur', 'Iconic']
WHERE slug = 'benagil';

-- Armação de Pêra
UPDATE destinations SET
  historical_context = 'Armação de Pêra was centrum van de tonijn visserij met de armação (net systeem) technieken. Het fort Fortaleza beschermde vissers tegen piraten aanvallen. Na decline van tonijn visserij werd het beach resort. Het heeft een van de langste aaneengesloten stranden van de Algarve. De oude kapel Nossa Senhora dos Navegantes op het strand is iconisch.',
  beach_guides = 'Praia de Armação de Pêra: Enorm 4 km lang breed zandstrand. Boardwalk langs hele lengte met boulevard. Alle faciliteiten lifeguards restaurants. Rustig water perfect families. Strand loopt door naar Galé.',
  attractions = 'Capela de Nossa Senhora dos Navegantes op strand. Fortaleza middeleeuwse fort. Zoomarine aqua park 10 min rijden. Aqualand waterpark. Boat trips naar Benagil grotten. Promenade met winkels.',
  dining_scene = 'Santola seafood specialiteit spider crab. Vila Lisa traditional Portuguese. O Pescador cataplana. Pizzeria Napoli Italiaans. Ice cream parlors langs boulevard.',
  transportation = 'Bus vanuit Portimão: €4, 30 minuten. Bus naar Albufeira €4. Gratis parkeren achter boulevard. Fietsen huren vlak langs strand. Train station 2km van strand.',
  budget_tips = 'Intermarché supermarkt voor picknick. Lunch deals boulevard restaurants €8-12. Appartement huren goedkoper hotels. Gratis strand faciliteiten. Off season 60% korting.',
  hidden_gems = 'Praia dos Salgados lagune natuurreservaat bird watching. Walk east naar Galé village authentiek. Early morning strand walks nobody around. Salgados Golf tussen lagunes.',
  best_time_to_visit = 'Mei-September',
  visitor_count = '170.000',
  best_for = ARRAY['Families', 'Lang strand', 'Rust', 'Budget']
WHERE slug = 'armacao-de-pera';

-- Aljezur
UPDATE destinations SET
  historical_context = 'Aljezur is een witgekalkt Moors dorp in de heuvels met kasteel ruïne. Het was belangrijk tijdens Moorse periode als verdedigingspunt. Het dorp ligt in het Parque Natural do Sudoeste Alentejano met beschermde wilde stranden. Het is bekend voor biologische landbouw en biologische markten.',
  beach_guides = 'Praia da Arrifana: Iconisch surfers strand met dramatische kliffen. Praia de Monte Clérigo: Familie strand tussen rotsen. Praia da Amoreira: Rivier mondt uit in oceaan uniek landschap. Praia do Canal: Wilde Atlantische strand weinig ontwikkeling. Alle stranden 10-15 min rijden.',
  attractions = 'Castelo de Aljezur Moors kasteel ruïne panorama uitzicht. Igreja Nova church in hoofd dorp. Biological market dinsdag. Natural park hiking trails. Surf schools meerdere stranden. Ponta da Atalaia viewpoint.',
  dining_scene = 'Pont''a Pé traditional Algarvean. Restaurante Pastelão cataplana specialiteit. A Lareira wood oven dishes. O Paulo seafood. Vegetarian organic restaurants.',
  transportation = 'Bus vanuit Lagos: €5, 45 minuten. Auto essentieel voor strand access. Geen trein connectie. Fietsen naar stranden heuvelachtig. Limited local transport.',
  budget_tips = 'Biological market goedkope verse producten. Camping bij stranden budget. Supermarkt Mini Preço basic. Surf lessons budget €25. Free castle access.',
  hidden_gems = 'Praia da Bordeira enormous wild beach dunes. Monte Clérigo village sunset. Odeceixe river beach north 20 min. Rogil village traditional pottery.',
  best_time_to_visit = 'April-Oktober (surf year round)',
  visitor_count = '70.000',
  best_for = ARRAY['Surfen', 'Natuur', 'Authentiek', 'Alternatief']
WHERE slug = 'aljezur';