-- Update resterende populaire bestemmingen met volledige info

-- Alvor
UPDATE destinations SET
  historical_context = 'Alvor was een Romeinse nederzetting en later een belangrijke Moorse haven. Het dorp werd bijna volledig verwoest door de aardbeving van 1755. De vissersroots zijn nog zichtbaar in de oude wijk met smalle straatjes. De lagune Ria de Alvor is beschermd natuurgebied.',
  beach_guides = 'Praia de Alvor: 3 km lang breed strand ideaal voor families. Praia dos Três Irmãos: Dramatische rotsformaties en grotten. Boardwalk verbindt centrum met strand. Lagune strand rustig water voor kinderen.',
  attractions = 'Igreja Matriz historic church. Ria de Alvor natuurreservaat met vogels. Boardwalk langs lagune. Watersports op kalm lagune water. Boottrips naar grotten. Kayaking door mangrovebos.',
  dining_scene = 'Restaurante Ruccula fine dining. Tasca do Ricky seafood tapas. Mullens Bar & Restaurant internationaal. O Teodósio grill. Geladaria Sorvette artisan ijs.',
  transportation = 'Bus vanuit Portimão: €3, 20 minuten. Fietsen huren vlak terrein €10/dag. Lokale bus naar Praia da Rocha €2. Gratis parkeren bij lagune. Wandelbaar centrum.',
  budget_tips = 'Lokale markt vrijdag voor verse vis. Intermarché supermarkt budget friendly. Lagune strand gratis faciliteiten. Lunch deals €7-9. Appartement huren goedkoop.',
  hidden_gems = 'Quinta da Rocha kleine wijnmakerij. Early morning lagune wandeling vogels spotten. Abicada ruins Romeinse villa. Praia do Vau oostelijke kant rustiger.',
  best_time_to_visit = 'April-Oktober',
  visitor_count = '130.000',
  best_for = ARRAY['Families', 'Natuur', 'Authentiek', 'Watersport']
WHERE slug = 'alvor';

-- Praia da Rocha
UPDATE destinations SET
  historical_context = 'Praia da Rocha betekent rots strand vanwege de iconische rode en gouden kliffen. Het was een van de eerste stranden ontwikkeld voor toerisme in de jaren 60. De Fortaleza Santa Catarina beschermde de Arade rivier ingang. Nu is het het levendigste strand resort van de Algarve.',
  beach_guides = 'Praia da Rocha: Iconisch 1.5 km breed zandstrand met gouden kliffen. Beach clubs met muziek en cocktails. Lifeguards en alle faciliteiten. Tunnels door rotsen naar verborgen baaien.',
  attractions = 'Fortaleza de Santa Catarina met zonsondergang uitzicht. Strip met bars en clubs. Beach volleyball en watersports. Boattrips naar Benagil. Casino da Rocha.',
  dining_scene = 'NoSoloÁgua beach restaurant chique. Galo Vadio tapas en cocktails. Safari seafood cataplana. Sirius Beach Club. Pizzeria Casavostra Italiaans.',
  transportation = 'Bus vanuit Portimão: €2, 10 minuten. Taxi €8. Gratis parkeren lastig hoogseizoen. Paid parking €1/uur. Walking distance naar centrum Portimão langs rivier.',
  budget_tips = 'Eet in Portimão centrum goedkoper. Supermarkt Continente in Portimão. Strand gratis zonder beach club. Happy hours 17:00-19:00 veel bars. Off season 50% korting hotels.',
  hidden_gems = 'Fort bij zonsondergang bijna leeg. Tunnels naar kleine baaien bij laag water. Walk naar Ferragudo via bridge panoramisch. Three Brothers beach rock formations.',
  best_time_to_visit = 'Mei-September',
  visitor_count = '280.000',
  best_for = ARRAY['Strand', 'Nachtleven', 'Activiteiten', 'Jong']
WHERE slug = 'praia-da-rocha';

-- Ferragudo
UPDATE destinations SET
  historical_context = 'Ferragudo is een authentiek vissersdorp aan de oostkant van de Arade rivier tegenover Portimão. Het behield zijn traditionele karakter met witte huisjes en smalle straatjes. Het São João fort beschermde de haven samen met fort aan Portimão kant. De vissers brengen nog steeds dagelijks verse vangst binnen.',
  beach_guides = 'Praia Grande do Ferragudo: Breed familie strand met faciliteiten. Praia dos Caneiros: Klein pittoresk strand tussen rotsen. Angrinha: Rustig lokaal strand bij dorp. Molhe: Beschut bij pier.',
  attractions = 'Igreja Nossa Senhora da Conceição barokke kerk. Visserswijk smalle straatjes verkennen. São João do Arade fort op kaap. Sunset viewpoint bij fort. Water taxi naar Portimão.',
  dining_scene = 'Rei das Praias seafood op Caneiros strand. Sueste modern Portugees. A Eira do Mel local petiscos. Café Graça traditional. Gelados & Companhia artisan ice cream.',
  transportation = 'Water taxi vanuit Portimão €3 zomer. Auto via brug 10 min. Bus service beperkt. Fietsen vanaf Portimão heuvelachtig. Wandelbaar dorp zelf.',
  budget_tips = 'Lokale cafés goedkope lunch €6-8. Mini market Oliveira voor boodschappen. Gratis parking bij strand. Vis kopen van lokale vissers. Strandwandelingen gratis.',
  hidden_gems = 'Afurada ruins Romeinse villa. São João fort sunset zonder toeristen. Small beaches accessible only at low tide. Local fish auction morning harbor.',
  best_time_to_visit = 'Mei-September',
  visitor_count = '85.000',
  best_for = ARRAY['Authentiek', 'Rustig', 'Fotografie', 'Koppels']
WHERE slug = 'ferragudo';