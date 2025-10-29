-- Update Olhão
UPDATE destinations SET
  historical_context = 'Olhão is de meest authentieke vissersdorp van de Algarve met cubistische architectuur beïnvloed door Noord-Afrika handel. De stad speelde een heldhaftige rol in verzet tegen Napoleon invasie in 1808. De vismarkt is de levendigste van de regio. Olhão is de toegangspoort tot de Ria Formosa eilanden.',
  beach_guides = 'Ilha da Armona: Rustig eiland met eindeloze stranden bereikbaar per boot 15 min. Ilha da Culatra: Authentiek visserseiland zonder auto''s. Ilha do Farol: Vuurtoren eiland met wild strand aan oceaan kant. Praia da Fuseta naburig strand.',
  attractions = 'Municipal Market met verse vis en zeevruchten dagelijks. Ria Formosa Natural Park boottrips. Nossa Senhora do Rosário kerk op heuvel met uitzicht. Marim Environmental Centre. Cubistische witte huisjes architectuur tour.',
  dining_scene = 'Casa de Pasto O Manjar do Peixe voor dagverse vis. Restaurante Cais voor cataplana. Ti Manel voor budget vis. Marisqueira Olhanense op de markt. Vila Adentro modern concept.',
  transportation = 'Trein vanuit Faro: €2, 15 minuten. Boten naar eilanden €2 retour elk 30 min. Fietsen huren ideaal €8/dag vlak terrein. Parkeren gratis buiten centrum. Wandelen in vissers wijk.',
  budget_tips = 'Eet verse vis bij de markt vanaf €8. Gratis boot eerste zondag maand soms. Picknick meenemen naar eilanden. Camping op Armona €12/nacht. Lokale cafés voor espresso €0,60.',
  hidden_gems = 'Marim salt pans flamingo watching. Quinta de Marim Roman ruins op wandelpad. Açoteias rooftop terraces rondwandeling. Fuseta fishing village 10 min rijden authentiek.',
  best_time_to_visit = 'April-Juni & September-Oktober',
  visitor_count = '90.000',
  best_for = ARRAY['Authentiek', 'Vis', 'Eilanden', 'Budget']
WHERE slug = 'olhao';

-- Update Monchique
UPDATE destinations SET
  historical_context = 'Monchique is een bergdorp in de Serra de Monchique met Romeinse thermale bronnen geschiedenis. De romeinen bouwden al baden bij Caldas de Monchique. Het gebied is bekend om medronho brandewijn en honey productie. De hoogste punt Fóia (902m) biedt panorama van hele Algarve.',
  beach_guides = 'Geen stranden, bergdorp op 40 min rijden naar kust. West kust stranden Arrifana en Amado zijn dichtstbij via kronkelwegen.',
  attractions = 'Fóia highest point Algarve met 360° uitzicht. Caldas de Monchique thermal spa dorp. Nossa Senhora do Desterro ruïne klooster. Medronho distilleries bezoeken. Hiking trails door eucalyptus bossen. Artisan craft shops.',
  dining_scene = 'A Charrette traditioneel restaurant met panorama. Restaurante Central voor presunto. Luar da Fóia bij top berg. Sabores da Serra lokale specialiteiten. Café Restaurant 1692 historisch.',
  transportation = 'Bus vanuit Portimão: €4, 1 uur bergopwaarts. Geen trein. Huurauto noodzakelijk voor flexibiliteit. Kronkelige bergwegen. Taxi vanaf kust €40. Wandelen in dorp zelf.',
  budget_tips = 'Lokale markten zaterdag voor verse producten. Gratis hiking trails overal. Thermal baden bij bron gratis alternatief spa. Lunch menu €8-10. Overnachten goedkoper dan kust.',
  hidden_gems = 'Barranco dos Pisões waterval na regenval. Picota berg hiking trail minder toeristisch. Alte village route naar Monchique panoramisch. Free thermal springs bij Caldas.',
  best_time_to_visit = 'Maart-Juni & September-November',
  visitor_count = '50.000',
  best_for = ARRAY['Natuur', 'Wandelen', 'Bergen', 'Rust']
WHERE slug = 'monchique';

-- Update Quarteira
UPDATE destinations SET
  historical_context = 'Quarteira transformeerde van rustig vissersdorp tot moderne badplaats in de jaren 70. De haven en dagelijkse vismarkt tonen nog steeds de visserij roots. Het 5 km lange strand en boulevard maken het populair bij Portugese families. De promenade is vernieuwd in 2000s.',
  beach_guides = 'Praia de Quarteira: 5 km lang breed zandstrand met alle faciliteiten. Strand loopt door naar Vilamoura Marina. Goed voor lange strandwandelingen. Beach bars en restaurants langs hele lengte.',
  attractions = 'Dagelijkse vismarkt vroeg in de ochtend. Promenade met palmbomen tot Vilamoura. Watersport centrum. Stand-up paddle boarding verhuur. Aqua Show Park 10 min rijden. Vilamoura Marina walking distance.',
  dining_scene = 'Vismarkt zelf voor goedkope verse vis lunches vanaf €6. Restaurante Dragoeiro seafood. A Casa da Avó traditioneel. Marisqueira Rui seafood cataplana. Gelateria Fresco voor ijs.',
  transportation = 'Bus vanuit Faro: €5, 40 minuten. Lokale bus naar Vilamoura €2. Gratis parkeren achter boulevard. Fietsen huren ideaal vlak. Wandelen naar Vilamoura 3 km langs strand.',
  budget_tips = 'Vismarkt heeft goedkope lunch opties. Pingo Doce supermarkt bij rotonde. Picknick op strand. Gratis strand zonder beach clubs. Appartement huren goedkoper dan hotels.',
  hidden_gems = 'Early morning fish auction at market. Walk to Vilamoura along beach at sunset. Loulé market zaterdag 20 min rijden. Local cafés away from boulevard cheaper.',
  best_time_to_visit = 'Mei-September',
  visitor_count = '150.000',
  best_for = ARRAY['Families', 'Strand', 'Budget', 'Lokaal']
WHERE slug = 'quarteira';