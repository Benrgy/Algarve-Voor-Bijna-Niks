-- Update Carvoeiro
UPDATE destinations SET
  historical_context = 'Carvoeiro was een klein vissersdorp totdat het ontdekt werd door toeristen in de jaren 60. Het behield zijn charme met witte huisjes rond een klein baai. De naam komt van carvalho (eik) die vroeger in de regio groeide. Het boardwalk pad langs de kliffen verbindt meerdere stranden.',
  beach_guides = 'Praia do Carvoeiro: Klein beschut strand in dorp centrum. Praia da Marinha: Een van de mooiste stranden van Europa met postkaart uitzicht. Praia do Vale de Centeanes: Rustig tussen de kliffen. Algar Seco rotsformaties met natuurlijk zwembad.',
  attractions = 'Benagil grot bereikbaar per kajak of boot. Boardwalk trail langs kliffen naar Algar Seco. Nossa Senhora da Encarnação kapel. Seven Hanging Valleys Trail hiking. Wine tasting bij Quinta dos Vales.',
  dining_scene = 'Boneca Bar voor vis aan het strand. The Captains Table voor seafood. Taste restaurant voor modern Portugees. A Gale voor traditionele cataplana. L''Orange voor fine dining.',
  transportation = 'Bus vanuit Portimão: €3, 30 minuten. Shuttle bus verbindt stranden in zomer. Taxi naar Benagil €15. Kajak huren voor strand hoppen. Parkeren lastig in hoogseizoen.',
  budget_tips = 'Supermarkt Intermarché op steile heuvel boven dorp. Picknick meenemen naar stranden. Boardwalk wandelen is gratis. Benagil grot bezoeken vroeg ochtend minder boten.',
  hidden_gems = 'Praia do Paraíso klein verborgen strand. Algar Seco bij zonsondergang zonder menigte. Carvoeiro Tennis Club met goedkope maaltijden. Secret spot: Alporchinhos kapel.',
  best_time_to_visit = 'Mei-Juni & September',
  visitor_count = '100.000',
  best_for = ARRAY['Koppels', 'Fotografie', 'Wandelen', 'Grotten']
WHERE slug = 'carvoeiro';

-- Update Sagres
UPDATE destinations SET
  historical_context = 'Sagres staat bekend als het einde van de wereld in de middeleeuwen. Hendrik de Zeevaarder stichtte hier zijn beroemde zeevaartschool in de 15e eeuw. De kaap was cruciaal voor Portugese ontdekkingsreizen. Het fort dateert uit 1443 en werd herbouwd na piraten aanval.',
  beach_guides = 'Praia do Martinhal: Beschut familie strand met faciliteiten. Praia do Tonel: Wild surfers strand onder het fort. Praia do Beliche: Klein strand met steile trap. Mareta beach bij dorp centrum. Cabo de São Vicente voor extreme golven.',
  attractions = 'Fortaleza de Sagres met windrozen. Cabo de São Vicente: Meest zuidwestelijke punt Europa met vuurtoren. Surf spots wereldwijd bekend. Hiking trails langs dramatische kliffen. Dolfijn en whale watching tours.',
  dining_scene = 'Restaurante Vila Velha voor verse vis. A Sagres seafood restaurant. Raposo fresh caught daily. Bossa Nova pizzeria. Café Correia voor petiscos en vinho.',
  transportation = 'Bus vanuit Lagos: €5, 1 uur. Geen trein verbinding. Huurauto essentieel voor flexibiliteit. Fietsen voor sportieve types. Weinig lokaal transport tussen stranden.',
  budget_tips = 'Kamperen bij Sagres of Vila do Bispo. Supermarkt Minipreço voor boodschappen. Bezoek fort na 17:00 gratis entrance. Zelf koken camping bespaart veel. Free camping spots bekend bij surfers.',
  hidden_gems = 'Praia do Zavial perfect voor beginnende surfers. Ingrina beach rustig alternatief. Sunset bij vuurtoren Cabo. Hiking naar Praia do Castelejo ruig en eenzaam.',
  best_time_to_visit = 'April-Juni & September-Oktober',
  visitor_count = '80.000',
  best_for = ARRAY['Surfen', 'Natuur', 'Avontuur', 'Zonsondergang']
WHERE slug = 'sagres';

-- Update Silves
UPDATE destinations SET
  historical_context = 'Silves was de hoofdstad van de Moorse Algarve (Xelb) en een belangrijk cultureel centrum. Het kasteel is het best bewaarde Moorse kasteel van Portugal, gebouwd met rode zandsteen. De kathedraal werd gebouwd na de christelijke herovering in 1242. De stad was rijk door kurkproductie.',
  beach_guides = 'Geen directe stranden, maar 15 minuten rijden naar Armação de Pêra of Carvoeiro kust. Arade rivier biedt rivierstrand mogelijkheden.',
  attractions = 'Castelo de Silves: Imposant Moors kasteel met stadsmuren. Sé Catedral gotische kathedraal. Museu Arqueológico met Moorse artefacten. Medieval fair in augustus. Arade rivier boottrips. Cruz de Portugal gothic cross.',
  dining_scene = 'Café Inglês in oude kathedraal gebouw. Marisqueira Rui seafood restaurant. Churrasqueira Valdemar voor kip piri piri. U Monchiqueiro voor tapas. Pastelaria Rosa culinair voor doces.',
  transportation = 'Trein vanuit Faro: €7, 1,5 uur. Bus connecties naar kust €3-5. Parkeren gratis in centrum. Wandelbaar centrum. Taxi naar stranden €15-20.',
  budget_tips = 'Eet bij lokale cafés buiten toerist route vanaf €6. Municipal market voor verse producten. Gratis kasteelbezoek eerste zondag maand. Parkeren gratis overal.',
  hidden_gems = 'Roman bridge over Arade river. Fabrica do Inglês abandoned cork factory. Hiking trail langs rivier naar Portimão 25km. Local market maandag voor authentiek.',
  best_time_to_visit = 'Maart-Juni & September-November',
  visitor_count = '60.000',
  best_for = ARRAY['Geschiedenis', 'Cultuur', 'Binnenland', 'Kasteel']
WHERE slug = 'silves';