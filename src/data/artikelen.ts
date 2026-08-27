import bordeira from '@/assets/destinations/bordeira-hero.jpg';
import localMarket from '@/assets/algarve-local-market.jpg';
import sunset from '@/assets/algarve-sunset-beach.jpg';

export type ArtikelCategorie = 'bestemmingen' | 'praktisch' | 'verhalen' | 'eten';

export interface Artikel {
  slug: string;
  titel: string;
  ondertitel: string;
  datum: string;
  leestijd: string;
  categorie: ArtikelCategorie;
  intro: string;
  inhoud: string; // markdown-achtige tekst met ##-kopjes
  tags: string[];
  uitgelicht: boolean;
  afbeelding: string;
}

export const categorieLabels: Record<ArtikelCategorie, string> = {
  bestemmingen: 'Bestemmingen',
  praktisch: 'Praktisch',
  verhalen: 'Verhalen',
  eten: 'Eten',
};

export const artikelen: Artikel[] = [
  {
    slug: 'praia-da-bordeira-kamperen',
    titel:
      'Kamperen bij Praia da Bordeira: het mooiste wilde strand van de Algarve',
    ondertitel:
      'Geen boulevards, geen parasols te huur — alleen jij, de wind en een strand dat groter is dan sommige dorpen.',
    datum: '2025-06-12',
    leestijd: '8 min',
    categorie: 'bestemmingen',
    uitgelicht: true,
    afbeelding: bordeira,
    intro:
      'Aan de westkust, bij het gehucht Carrapateira, ligt een strand dat de massa nooit heeft gevonden. Praia da Bordeira is wild, gratis en overweldigend groot. Dit is hoe je er kampeert zoals het hoort.',
    tags: ['westkust', 'kamperen', 'stranden', 'Carrapateira', 'surfen'],
    inhoud: `De eerste keer dat je over de heuvel rijdt en Praia da Bordeira zich onder je uitvouwt, hou je even je adem in. Een strand van bijna twee kilometer breed, een kronkelende rivier die door het zand naar zee zoekt, en daarachter niets dan duinen en lucht. Geen hotels. Geen boulevard. Geen enkel bord dat je iets probeert te verkopen.

Dit is de Algarve die de reisbrochures je niet laten zien.

## Waar ligt het precies

Bordeira ligt aan de wilde westkust, vlak boven Carrapateira, ongeveer 15 kilometer ten noorden van Sagres. Je rijdt vanaf de N268 een smal weggetje in dat door de duinen slingert. Het laatste stuk is onverhard maar prima te doen met een gewone auto — rustig aan rijden is het devies.

Dit is bewust geen makkelijk bereikbare plek. En juist dáárom is het nog zo ongerept.

## Parkeren: gratis, op het hoge plateau

Bovenop het plateau, vlak voor je de duinen in loopt, is een grote onverharde parkeerplaats. Volledig **gratis**, het hele jaar door. Vanaf hier heb je meteen het uitzicht dat je nooit meer vergeet, en een houten vlonderpad brengt je in een paar minuten naar het strand beneden.

Kom je vroeg in de ochtend, dan staat er misschien een handvol auto's. In het hoogseizoen kan het rond het middaguur voller worden, maar "vol" betekent hier nog altijd dat je honderd meter kunt lopen zonder iemand tegen te komen.

## Het camperveld ernaast

Naast de parkeerplaats ligt een eenvoudig maar **legaal** camperveld. Verwacht geen luxe: het is basic, met beperkte voorzieningen, maar het is de echte deal. 's Avonds zit je met een kop koffie of een biertje naar de oceaan te kijken terwijl de lucht oranje kleurt.

Belangrijk: wildkamperen in de duinen zelf is verboden en wordt beboet. Gebruik het aangewezen veld of een van de campings bij Carrapateira. Zo blijft deze plek mooi voor iedereen die na jou komt.

## De wandeling langs de kliffen

Neem de tijd voor de kustwandeling. Vanaf het plateau loopt een pad langs de kliffen naar het zuiden, richting de Pontal da Carrapateira. Onderweg kijk je honderden meters recht naar beneden op het beukende water, en op heldere dagen zie je de kust tot ver richting Sagres.

Trek stevige schoenen aan, neem water mee, en blijf op het pad — de rand brokkelt af en er staan geen hekken. Dat is precies de bedoeling.

## De golven kunnen twee meter hoog zijn

Bordeira is een surfstrand, en dat merk je. De Atlantische deining rolt hier ongebroken binnen en de golven kunnen makkelijk **twee meter** halen. Voor ervaren surfers is het een droom; voor zwemmers is voorzichtigheid geboden. Er zijn geen strandwachten. Ga niet verder dan tot je knieën als je de zee niet vertrouwt, en let op de stroming rond de riviermonding.

## De zonsondergangen die je nergens anders zo ziet

Omdat dit de westkust is, zakt de zon recht in de oceaan. Maar wat Bordeira uniek maakt is de rivier: bij eb blijft er een spiegelgladde laag water op het zand liggen, en daarin weerkaatst de hele hemel. Vijf minuten lang staat de wereld in brand — boven én onder je. Blijf tot het laatste licht weg is.

## Carrapateira: één restaurant, één supermarkt

Het dorpje erachter is bescheiden en dat is het charmante eraan. Een handjevol witte huizen, één klein supermarktje voor je boodschappen, en een paar eenvoudige restaurants waar ze verse vis grillen. Geen souvenirwinkels, geen toeristenmenu's. Je eet wat de kok die dag heeft.

Sla je inkopen hier in voordat je naar het strand gaat — er is niets te koop bij de parkeerplaats.

## Waarom megahotels dit nooit zullen annexeren

Dit hele stuk kust valt binnen het **Parque Natural do Sudoeste Alentejano e Costa Vicentina**, een beschermd natuurgebied. Bouwen is er verboden. Terwijl de zuidkust volgebouwd raakte met resorts, bleef het westen wild — niet per ongeluk, maar bij wet.

Daarom blijft Bordeira wat het is: een strand dat je verdient door ernaartoe te rijden, en dat je terugbetaalt met een stilte die je in de rest van de Algarve nauwelijks nog vindt.

## Praktische info

- **Beste periode:** mei–juni en september–oktober. Aangenaam warm, weinig mensen, en het licht is op zijn mooist. Juli en augustus zijn drukker en winderiger.
- **Parkeren:** gratis, onverhard, op het plateau boven het strand.
- **Faciliteiten:** minimaal. Reken op geen strandwacht, geen parasolverhuur en beperkte toiletten. Neem water, eten en een vuilniszakje mee.
- **Camperveld:** basic maar legaal, direct naast de parkeerplaats. Wildkamperen in de duinen is verboden.
- **Meenemen:** windjack (het waait bijna altijd), stevige schoenen voor de kliffen, en genoeg water.`,
  },
  {
    slug: 'prato-do-dia-gids',
    titel:
      'De ultieme gids voor het prato do dia: zo eet je als een Portugees voor €7',
    ondertitel:
      'Het best bewaarde geheim van de Portugese lunch — vers, overvloedig en spotgoedkoop.',
    datum: '2025-05-28',
    leestijd: '7 min',
    categorie: 'eten',
    uitgelicht: true,
    afbeelding: localMarket,
    intro:
      'Terwijl toeristen €18 betalen voor een middelmatige "grilled fish" aan de boulevard, eten de locals twee straten verderop een compleet driegangenmenu voor zeven euro. Dit is hoe je het vindt.',
    tags: ['eten', 'budget', 'tasca', 'lokaal', 'lunch'],
    inhoud: `Er is één ongeschreven regel die het verschil maakt tussen eten als toerist en eten als local in Portugal: het **prato do dia**, het gerecht van de dag. Wie het kent, eet elke middag vers, overvloedig en voor een prijs die je in Nederland niet meer voor een broodje krijgt.

## Wat is het prato do dia precies

Het prato do dia is het dagmenu dat vrijwel elke echte tasca (eenvoudig lokaal eethuis) rond lunchtijd serveert. De kok maakt die ochtend een paar gerechten vers klaar met wat de markt te bieden had, en dat is wat je krijgt.

Meestal bestaat het uit:

- Een kom **soep** vooraf (bijna altijd, en bijna altijd lekker)
- Een royaal **hoofdgerecht** — vis of vlees met rijst, aardappelen en salade
- **Brood** op tafel
- Vaak een **drankje** inbegrepen (huiswijn, water of een biertje)

En dat alles voor **€6 tot €9**. Geen truc, geen kleine lettertjes.

## Hoe herken je een goede tasca (en vermijd je toeristenvallen)

De kunst zit hem in het kiezen van de juiste plek. Gelukkig zijn de signalen makkelijk te lezen als je weet waar je op let.

### Goede tekenen

- **Geen foto's op de menukaart.** Foto's van gerechten zijn bedoeld voor mensen die de taal niet spreken — oftewel toeristen. Een echte tasca heeft dat niet nodig.
- **Portugees publiek.** Zie je bouwvakkers, kantoormensen en oudere echtparen die duidelijk niet op vakantie zijn? Dan zit je goed.
- **Een krijtbord buiten** met een paar handgeschreven gerechten. Dat is het prato do dia van vandaag.
- **Een simpele, drukke zaak** rond een uur of één. Locals weten waar het lekker is.

### Alarmbellen

- Menu's in vier talen met glimmende foto's
- Een ober die je vanaf de stoep naar binnen probeert te lokken
- "Tourist menu" op een bord
- Ligging: pal aan de boulevard of het toeristische plein

## De beste tijden: 12:00–14:00 stipt

Het prato do dia is een **lunchgerecht**. Het wordt geserveerd tussen ongeveer 12:00 en 14:00, en als het op is, is het op. Kom je om drie uur, dan vis je achter het net. Wil je zeker zijn van de beste keuze, wees er dan rond half één.

's Avonds serveren tasca's à la carte, wat prima is maar duurder — de echte deal is de lunch.

## Hoe bestel je het

Simpel. Je gaat zitten, en als de ober komt zeg je gewoon: **"prato do dia, por favor"**. Vaak is er keuze uit twee opties (bijvoorbeeld vis of vlees) — die staan op het krijtbord of de ober noemt ze op. Wijs desnoods. Een glimlach en een **"obrigado"** (of "obrigada" als je een vrouw bent) doen de rest.

## Typische gerechten die je gaat tegenkomen

- **Bacalhau** — gezouten kabeljauw, de nationale trots, in honderd varianten (gebakken, met room, met aardappel)
- **Frango** — gegrilde of gestoofde kip, vaak met een pittig randje
- **Arroz de peixe** — smeuïge visrijst, bijna een soep, vol met verse vis
- **Carne de porco** — varkensvlees, soms met kokkels (à alentejana)
- **Bife** — een simpele biefstuk met een gebakken ei erop

Alles komt met rijst én aardappelen (ja, allebei — Portugal houdt van koolhydraten) en een eenvoudige salade.

## Wat kost het echt, en de regio-verschillen

Reken op **€6 tot €9** voor een compleet prato do dia. In het rustige **oosten** (rond Tavira en Olhão) en in het binnenland vind je de scherpste prijzen. In het toeristischere **westen** en aan de populaire kustplaatsen loopt het iets op — daar betaal je soms €9 tot €11 voor hetzelfde.

Nog altijd een fractie van wat je aan de boulevard kwijt bent.

## De etiquette: let op het couvert

Eén ding om te weten: het **brood, de olijven en de kleine hapjes** (het couvert) die bij het zitten gaan op tafel verschijnen, zijn **niet gratis**. Eet je ervan, dan reken je een paar euro af. Wil je ze niet, schuif ze dan gewoon opzij of zeg vriendelijk "não, obrigado" — dat is volkomen normaal en niemand kijkt ervan op.

Ook water komt niet vanzelf: je bestelt een fles (**água com gás** voor bruisend, **sem gás** voor plat). Vraag je om kraanwater, dan krijg je vaak een verbaasde blik — dat is hier ongebruikelijk.

## Drie concrete aanraders

- **Oosten — Olhão:** duik weg in de straatjes áchter de markthallen. Rond lunchtijd staan hier de tasca's waar de vissers en marktlui zelf eten. Zoek de plek met de meeste bestelbusjes voor de deur.
- **Midden — Loulé:** op zaterdag, na een rondje over de beroemde markt, vind je in de zijstraten van het centrum eethuizen waar het prato do dia amper €7 kost.
- **Westen — Sagres:** iets duurder omdat het surferland is, maar loop weg van de haven het dorp in. Daar serveren ze verse vis van de boot van die ochtend voor een eerlijke prijs.

Eet één keer een echt prato do dia, en je begrijpt meteen waarom de Portugezen 's middags de tijd nemen. Geen haast, geen poespas — gewoon goed, eerlijk eten voor bijna niks.`,
  },
  {
    slug: 'golden-hour-algarve',
    titel:
      'Gouden uur in de Algarve: de 7 mooiste zonsondergangs-plekken zonder massa',
    ondertitel:
      'Iedereen kent de officiële uitzichtpunten. Dit zijn de plekken waar je het licht nog voor jezelf hebt.',
    datum: '2025-05-10',
    leestijd: '9 min',
    categorie: 'bestemmingen',
    uitgelicht: true,
    afbeelding: sunset,
    intro:
      'De Algarve heeft misschien wel de mooiste zonsondergangen van Europa. Maar op de bekende viewpoints sta je schouder aan schouder. Dit zijn zeven plekken waar het goud van jou alleen is — inclusief waar je moet zijn en wanneer.',
    tags: ['zonsondergang', 'fotografie', 'uitzichtpunten', 'natuur', 'kust'],
    inhoud: `Er is een moment, ongeveer een half uur voor de zon de horizon raakt, waarop de hele Algarve van kleur verandert. De kliffen gloeien op, het water wordt vloeibaar goud en de lucht doet dingen die geen filter kan namaken. Fotografen noemen het het gouden uur. Locals noemen het gewoon de mooiste tijd van de dag.

Het probleem: iedereen weet dit. De bekende viewpoints staan een half uur van tevoren al vol met statieven en selfiesticks. Hieronder zeven plekken waar dat níet gebeurt — met precies waar je moet zijn en wanneer.

## 1. Ponta da Piedade — voor het puurste goud

**Coördinaten:** 37.0810, -8.6690 (Lagos)

De kliffen van Ponta da Piedade zijn beroemd, en overdag druk. Maar het geheim is dat de meeste bezoekers vertrekken vóór de zon zakt. Blijf hangen. Loop vanaf de vuurtoren de trappen af naar de lagere rotsplateaus, en kijk hoe de okerkleurige rotsformaties oplichten alsof ze van binnenuit branden.

**Wanneer:** wees er 45 minuten voor zonsondergang, zodat de dagjesmensen net weg zijn. Parkeren kan gratis bij de vuurtoren.

## 2. Cabo de São Vicente — het meest westelijke punt van Europa

**Coördinaten:** 37.0233, -8.9976 (bij Sagres)

Dit is letterlijk het einde van het vasteland: de zuidwestelijke hoek van Europa, waar vroeger werd gedacht dat de wereld ophield. De zon zakt hier recht in de oceaan, en het gevoel van weidsheid is overweldigend.

Het wordt bezocht, maar de kaap is zó groot dat je altijd een eigen plekje op de rotsen vindt, weg van het groepje bij de vuurtoren. Neem een trui mee — de wind hier is berucht.

**Wanneer:** kom een uur van tevoren, koop een van de beroemde worstenbroodjes bij het karretje op de parkeerplaats, en zoek een rots richting het zuiden.

## 3. Praia da Bordeira — reflectie in de lagune

**Coördinaten:** 37.1780, -8.9010 (Carrapateira)

Wat Bordeira uniek maakt bij zonsondergang is de rivier die bij eb een dunne spiegel van water op het strand achterlaat. De hele hemel weerkaatst erin, en heel even lijkt het alsof je op een spiegel loopt terwijl de zon dubbel ondergaat.

Dit strand is zo groot en zo weinig bezocht dat je vrijwel gegarandeerd alleen staat.

**Wanneer:** check de getijden en zorg dat het rond zonsondergang eb is — dan is de reflectie op zijn mooist. Parkeren gratis op het plateau.

## 4. De Falésia-kliffen vanuit het noorden — kleur op kleur

**Coördinaten:** 37.0890, -8.1720 (tussen Albufeira en Vilamoura)

De rode en okergele kliffen van Praia da Falésia zijn overdag al indrukwekkend, maar in het gouden uur worden de kleuren bijna onwerkelijk. De truc is om ze **vanaf het noordelijke einde** te benaderen, bij Olhos de Água, in plaats van de drukke zuidkant. Daar loop je over het klifpad met de zon in de rug en de kliffen vol in het licht.

**Wanneer:** het klifpad is het mooist het laatste uur voor zonsondergang, wanneer de laagstaande zon de textuur van het gesteente uitlicht.

## 5. Odeceixe — waar de rivier de zee ontmoet

**Coördinaten:** 37.4390, -8.7920 (grens Algarve/Alentejo)

Odeceixe heeft een uniek strand: aan de ene kant de wilde oceaan, aan de andere kant een rustige rivier die er parallel aan loopt. Bij zonsondergang kleuren beide wateroppervlakken tegelijk, en vanaf het klifpad boven het dorp heb je er het perfecte overzicht op.

Dit ligt net op de grens met de Alentejo, ver van de toeristische zuidkust, dus de rust is hier vanzelfsprekend.

**Wanneer:** loop het pad op vanaf het parkeerterrein bij het strand, richting het zuidelijke klif, ongeveer 40 minuten voor zonsondergang.

## 6. Fuseta op de Ria — met de vissersbootjes

**Coördinaten:** 37.0555, -7.7440 (Fuseta, oostkust)

Voor iets heel anders dan de dramatische kliffen: Fuseta ligt aan de rustige Ria Formosa, de lagune van de oostkust. Hier gaat de zon niet onder in een woeste oceaan, maar boven een spiegelglad watervlak vol kleurige vissersbootjes en wadende flamingo's.

Het is intiem, stil en typisch Portugees — geen enkele toerist te bekennen, alleen locals die hun avondwandeling maken.

**Wanneer:** ga naar de kade of de kleine haven rond zonsondergang. Bij eb liggen de bootjes scheef in de modderbanken, wat prachtige silhouetten oplevert.

## 7. Serra de Monchique — zicht tot aan de zee

**Coördinaten:** 37.3160, -8.6000 (Fóia, boven Monchique)

De enige plek op deze lijst die níet aan de kust ligt. Vanaf Fóia, het hoogste punt van de Algarve (902 meter), kijk je bij helder weer over de hele provincie tot aan de glinsterende oceaan in de verte. De zon zakt boven een deken van heuvels, en achter je kleuren de bergen paars.

Het is een half uurtje rijden landinwaarts vanaf de kust, en juist daarom vrijwel altijd rustig.

**Wanneer:** rijd op tijd omhoog (de bergweg kost tijd) en zorg voor een heldere dag — bij bewolking verdwijnt het uitzicht. Neem een jas mee, boven is het fris.

## De belangrijkste tip: kom niet op het laatste moment

De grootste fout die mensen maken is precies 30 minuten voor zonsondergang naar het bekendste viewpoint rijden — samen met alle anderen. Draai het om. Kom een uur vroeger, kies een van deze plekken, en wandel een stukje verder dan waar de meeste mensen stoppen.

Het gouden uur is niet één moment, maar een langzaam kantelen van het licht. Wie de tijd neemt, krijgt de mooiste kleuren én de stilte cadeau. En dat is precies waar de Algarve op zijn best voor bedoeld is.`,
  },
];

export function getArtikelBySlug(slug: string): Artikel | undefined {
  return artikelen.find((a) => a.slug === slug);
}

export function getGerelateerdeArtikelen(
  artikel: Artikel,
  max = 3
): Artikel[] {
  return artikelen
    .filter((a) => a.slug !== artikel.slug && a.categorie === artikel.categorie)
    .slice(0, max);
}
