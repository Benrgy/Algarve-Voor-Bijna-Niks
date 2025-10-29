-- Update rest van de belangrijke bestemmingen met complete info
-- Loulé
UPDATE destinations SET
  historical_context = 'Loulé is een van de oudste steden van de Algarve met Arabische roots. De naam komt van Al-''Ulya. De kasteelmuren dateren uit 13e eeuw. De stad is beroemd om traditioneel handwerk, manden vlechten en koperwerk. Het carnaval van Loulé is het grootste van de Algarve.',
  beach_guides = 'Geen directe stranden. Quarteira strand 15 min rijden. Praia de Vilamoura en Vale do Lobo binnen 20 minuten bereikbaar.',
  attractions = 'Zaterdag markt: grootste en meest authentieke markt Algarve. Castelo de Loulé met panorama. Municipal Market dagelijks met verse producten. Banhos Islâmicos Moorse baden. Carnaval in februari/maart. Artisan workshops.',
  dining_scene = 'Bica Velha traditioneel restaurant. Marisqueira Rui voor seafood. A Casa do André voor grillgerechten. Café Calcinha sinds 1926 historisch. Loulé Food Court in markthal.',
  transportation = 'Bus vanuit Faro: €4, 30 minuten. Centraal busstation connecties heel Algarve. Parkeren gratis buiten centrum. Wandelbaar historisch centrum. Taxi naar stranden €15-20.',
  budget_tips = 'Markt zaterdag voor goedkope verse producten en lokaal eten. Lunch bij markthallen €5-8. Gratis kasteel bezoek. Wandelen door oude stad gratis.',
  hidden_gems = 'Banhos Islâmicos underground Moorse baden. Espírito Santo kerk converted from mosque. Workshops artisan streets. Hiking trails Rocha da Pena 20 min rijden.',
  best_time_to_visit = 'Maart-Juni & September-November (zaterdag voor markt)',
  visitor_count = '70.000',
  best_for = ARRAY['Cultuur', 'Markt', 'Authentiek', 'Ambacht']
WHERE slug = 'loule';

-- Monte Gordo
UPDATE destinations SET
  historical_context = 'Monte Gordo was een vissersdorp totdat het ontwikkeld werd als badplaats in de jaren 60-70. De naam betekent dikke berg, verwijzend naar de duinen. Het is het oostelijkste grote strand resort van de Algarve, vlakbij Spaanse grens. Populair bij Spaanse bezoekers en Portugese families.',
  beach_guides = 'Praia de Monte Gordo: 12 km breed zandstrand met warme kalme oceaan. Meia Praia richting Spanje. Isla Canela in Spanje 20 min. Pine forests achter strand. Lange boulevard met faciliteiten.',
  attractions = 'Casino de Monte Gordo. Lange boulevard met winkels en restaurants. Watersport centrum. Monte Gordo centrum met markt. Vila Real Santo António 3 km architectonisch interessant. Castro Marim kasteel 15 min.',
  dining_scene = 'Copacabana beach restaurant. Mota seafood op boulevard. Tasca do Zé lokaal favoriet. Churrasqueira Transmontana grillhuis. O Barqueiro voor verse vis.',
  transportation = 'Bus vanuit Vila Real: €2, 10 minuten. Bus naar Faro €6, 1,5 uur. Fietsen huren perfect voor vlak. Gratis parkeren makkelijk. Spanje over grens 15 min rijden.',
  budget_tips = 'Goedkoop t.o.v. West Algarve. Lunch menu €8-10 overal. Continente supermarkt voor boodschappen. Spaanse supermarkten nog goedkoper over grens. Camping Campismo options.',
  hidden_gems = 'Cacela Velha 20 min rijden prachtig wit dorp. Salt marshes Reserva Natural do Sapal. Sunset over Guadiana rivier. Spanning grens lopend naar Ayamonte.',
  best_time_to_visit = 'Juni-September (warmste water Algarve)',
  visitor_count = '130.000',
  best_for = ARRAY['Families', 'Warm water', 'Budget', 'Spanje']
WHERE slug = 'monte-gordo';