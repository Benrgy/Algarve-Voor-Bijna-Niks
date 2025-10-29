-- Update laatste batch belangrijke bestemmingen

-- Quinta do Lago
UPDATE destinations SET
  historical_context = 'Quinta do Lago is een ultra-luxe resort ontwikkeld in de jaren 70 in het hart van de Gouden Driehoek. Het 800 hectare grote estate heeft enkele van Europa''s beste golfbanen. Het Ria Formosa natuurpark grenst aan het resort. Het is favoriete vakantie bestemming van royalty en celebritites.',
  beach_guides = 'Praia de Quinta do Lago: Exclusief breed strand bereikbaar via houten loopbrug over lagune. Gigi Beach club en restaurant. Warme lagune water perfect voor kinderen. Alle luxe faciliteiten. Watersports centrum premium.',
  attractions = '3 championship golf courses. Campus luxury sports club. Ria Formosa nature trails. Watersports op lagune. Cycling trails door natural park. Luxury villa shopping.',
  dining_scene = 'Casa do Lago fine dining sterren niveau. 2 Passos seafood exquisite. Bovino Grill premium steaks. Gigi Beach mediterranean fusion. The Shack beach burgers.',
  transportation = 'Taxi vanuit Faro airport €35. Private transfer service. Golf buggy huren binnen resort. Fietsen huren premium bikes. Beperkt openbaar vervoer. Luxury car rental available.',
  budget_tips = 'Niet budget friendly bestemming. Picknick lunch bespaart. Bike instead of golf buggy. Public beach access gratis. Visit restaurants for lunch niet dinner goedkoper.',
  hidden_gems = 'São Lourenço nature trail through salt marshes. Sunset walks along lagoon boardwalk. Ancão beach less crowded west side. Ludo nature trail bird watching.',
  best_time_to_visit = 'Maart-November (golfseizoen)',
  visitor_count = '75.000',
  best_for = ARRAY['Luxe', 'Golf', 'Natuur', 'Elite']
WHERE slug = 'quinta-do-lago';

-- Vale do Lobo  
UPDATE destinations SET
  historical_context = 'Vale do Lobo betekent vallei van de wolf, genoemd naar wolven die hier ooit leefden. Het resort werd ontwikkeld in de jaren 60 als eerste luxe resort van de Algarve. De iconische Royal Golf Course met klif holes is wereldberoemd. Het is populair bij Britse expatriates en golfers.',
  beach_guides = 'Praia de Vale do Lobo: Spectaculair strand met rode kliffen. Bereikbaar via trappen door klif. Chiringuito beach restaurant. All faciliteiten high-end. Watersports.',
  attractions = 'Royal Golf Course iconische klif holes. Ocean Golf Course. Vale do Lobo Tennis Academy. Praça (central plaza) winkels restaurants. Beach club. Luxury shopping.',
  dining_scene = '2 Passos restaurant fine dining. Leme beachfront seafood. Bovino Steakhouse. Casa Velha traditional in historic building. DOC rooftop.',
  transportation = 'Taxi vanuit Faro €30. Quarteira bus 5 km weg. Golf buggy huren resort. Fietsen huren. Beperkt openbaar vervoer. Walking between beach and praça 15 min.',
  budget_tips = 'Supermarkt in Almancil 5 km goedkoper. Publieke strand toegang gratis via beach. Lunch deals €15-20. Off season golf korting 50%. Villa huren delen met groep.',
  hidden_gems = 'Walk to Ancão beach nature perfect solitude. Sunrise golf early morning empty course. Almancil markets local produce. São Lourenço Chapel gilded baroque masterpiece nearby.',
  best_time_to_visit = 'Februari-November',
  visitor_count = '65.000',
  best_for = ARRAY['Golf', 'Luxe', 'Beach Club', 'Tennis']
WHERE slug = 'vale-do-lobo';

-- Burgau
UPDATE destinations SET
  historical_context = 'Burgau is een klein authentiek vissersdorp dat zijn traditionele karakter behield. De steile straatjes leiden naar het strand. Vroeger leefde het dorp van visvangst en landbouw. Nu is het rustige alternatief voor drukke resorts. De naam komt van burgo (klein dorp).',
  beach_guides = 'Praia de Burgau: Klein beschut strand tussen kliffen perfect families. Zeer rustig. Enkele beach bars restaurants. Lifeguards in summer. Rotspools bij laag water. Snorkelen goed.',
  attractions = 'Traditional village streets verkennen. Clifftop walks naar Lagos en Luz. Fishing boats on beach. Igreja de Nossa Senhora da Conceição. Local artisan shops.',
  dining_scene = 'Beach Bar fresh fish beachfront. Café Iris local cuisine. Restaurante Paraíso seafood cataplana. Adega do Joao traditional. Gelados sorvette ice cream.',
  transportation = 'Bus vanuit Lagos: €3, 25 minuten beperkt. Auto aangeraden. Parkeren bij strand beperkt hoogseizoen. Fietsen heuvelachtig. Wandelen naar Luz 5 km coastal trail.',
  budget_tips = 'Minimarkt basic supplies. Self catering rentals betaalbaar. Gratis strand. Pack lunch vanaf supermarkt Lagos. Off season rustig en goedkoop.',
  hidden_gems = 'Rock pools at low tide perfect kids. Sunrise beach yoga local classes. Western clifftop walk sunset incredible. Small craft market summer weekends.',
  best_time_to_visit = 'Mei-September',
  visitor_count = '35.000',
  best_for = ARRAY['Rustig', 'Authentiek', 'Families', 'Wandelen']
WHERE slug = 'burgau';