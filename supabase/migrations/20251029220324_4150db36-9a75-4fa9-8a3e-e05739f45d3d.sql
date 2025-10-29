-- Update meer populaire bestemmingen

-- Loulé
UPDATE destinations SET
  historical_context = 'Loulé is een van de oudste steden van de Algarve met oorsprong in de Romeinse tijd. Tijdens Moorse heerschappij was het een belangrijk administratief centrum. Het kasteel dateert uit de 13e eeuw. De stad is beroemd om ambachtelijke tradities en de levendige markt in een prachtig Moorse architectuur gebouw.',
  beach_guides = 'Geen directe stranden. Dichtstbijzijnde zijn Quarteira en Vilamoura op 15 minuten rijden. Quinta do Lago en Vale do Lobo luxury beaches op 20 minuten.',
  attractions = 'Mercado Municipal in Moorse stijl gebouw zaterdag markt. Castelo de Loulé met stadsmuur. Med Festival meerdaags muziekevenement. Ambachtelijke workshops keramiek en koper. Loulé Carnival grootste van Portugal. Ermida de Nossa Senhora da Conceição kapel op heuvel.',
  dining_scene = 'Bica Velha traditional Algarvean. Pura Cepa tapas en wijnen. Tertúlia da Villa in historisch huis. Faz Gostos modern fusion. Gelato Divino artisan ijs.',
  transportation = 'Trein vanuit Faro: €3, 20 minuten. Bus naar kustplaatsen €3-5. Lokale markten zaterdag druk. Fietsen heuvelachtig. Gratis parkeren buiten centrum.',
  budget_tips = 'Markt zaterdag goedkope verse producten. Lokale cafés lunch €6-8. Gratis kasteel toegang. Eet waar locals eten in side streets. Overnachten goedkoper dan kust.',
  hidden_gems = 'Salir kasteel 15 km noord panorama uitzicht. Querença wit dorp traditie. Fonte da Benémola natural spring hiking. Craft workshops open voor bezoekers.',
  best_time_to_visit = 'Maart-Juni & September-November',
  visitor_count = '95.000',
  best_for = ARRAY['Cultuur', 'Markt', 'Authentiek', 'Binnenland']
WHERE slug = 'loule';

-- Monte Gordo
UPDATE destinations SET
  historical_context = 'Monte Gordo was een klein vissersdorp totdat het ontdekt werd als badplaats. Het is nu het grootste strandresort van Oost Algarve. De brede boulevard en casino trekken veel Spaanse bezoekers door de nabijheid van de grens. Het warme water en zachte golven zijn ideaal voor families.',
  beach_guides = 'Praia de Monte Gordo: 12 km lang breed zandstrand met fijn zand. Warmste water van de Algarve. Zeer vlak perfect voor kinderen. Alle faciliteiten langs hele lengte. Lifeguards overal aanwezig.',
  attractions = 'Casino de Monte Gordo. Vila Real de Santo António historische grensstad 5 min. Castro Marim kasteel en natuurreservaat. Zoutpannen vogels spotten. Golf in nabijheid. Watersports centrum.',
  dining_scene = 'Copacabana seafood beachfront. Piri Piri Steakhouse grillgerechten. Mota Bar traditioneel. Pizzeria Il Veneziano Italiaans. Geladaria Veneziana artisan ijs.',
  transportation = 'Bus vanuit Faro: €7, 1 uur. Bus naar Spanje grens frequent. Gratis parkeren achter strand. Fietsen huren vlak terrein ideaal. Trein station Vila Real 5 km.',
  budget_tips = 'All inclusive hotels betaalbaar. Supermarkt Intermarché budget. Gratis strand faciliteiten. Eet bij lokale tascas €7-10. Spanje dag trip goedkope shopping.',
  hidden_gems = 'Cacela Velha 20 min west perfecte witte dorp. Castro Marim kasteel zonsondergang. Praia Verde rustig luxe alternatief. Salt pans flamingo watching gratis.',
  best_time_to_visit = 'Juni-September',
  visitor_count = '140.000',
  best_for = ARRAY['Families', 'Warm water', 'Strand', 'Rust']
WHERE slug = 'monte-gordo';

-- Luz
UPDATE destinations SET
  historical_context = 'Praia da Luz was een klein vissersdorp totdat de tsunami van 1755 het grotendeels verwoestte. De kerk Igreja da Nossa Senhora da Luz dateert van voor de tsunami. In de jaren 80 werd het ontdekt door toeristen. Het behield een rustige familiale sfeer. De zwarte rotsen naast het strand gaven het zijn naam licht-donker contrast.',
  beach_guides = 'Praia da Luz: Breed beschut strand met zwarte rotsen. Alle faciliteiten en lifeguards. Rustig water perfect voor kinderen. Boardwalk langs strand. Sunset views spectaculair vanuit strand.',
  attractions = 'Igreja da Luz historic church. Roman ruins Romana villa bij strand. Rocha Negra black rock formation. Watersports centre kayaking SUP. Wandelen naar Lagos langs kliffen 6 km scenic route.',
  dining_scene = 'Fortaleza seafood met ocean view. Beach House Bar & Restaurant beachfront. Finn''s Steakhouse premium vlees. Sangam Indian restaurant. The Bull Luz traditional pub food.',
  transportation = 'Bus vanuit Lagos: €3, 20 minuten. Taxi €20. Fietsen huren heuvelachtig naar Lagos. Gratis parkeren bij strand. Algar Seco coastal walk naar Burgau 5 km.',
  budget_tips = 'Supermarkt Mini Preço budget prices. Self catering appartement goedkoop. Happy hours veel restaurants. Gratis strand activiteiten. Picknick aan strand.',
  hidden_gems = 'Roman villa ruins free access. Cliff walk east naar Burgau panoramic. Rocha Negra sunset spot local secret. Forte da Luz restaurant terrace view.',
  best_time_to_visit = 'April-Oktober',
  visitor_count = '110.000',
  best_for = ARRAY['Families', 'Rustig', 'Expats', 'Strand']
WHERE slug = 'luz';