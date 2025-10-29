import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/src/assets/algarve-hero-beach.jpg',
    title: 'Praia da Marinha',
    location: 'Carvoeiro, Centraal Algarve',
    description: 'Een van de mooiste stranden ter wereld volgens Michelin - turkooizen water tussen gouden rotswanden',
    category: 'Stranden',
    story: 'Dit iconische strand werd in 2018 door Lonely Planet uitgeroepen tot één van de 100 mooiste stranden wereldwijd. De dramatische kalkstenen formaties creëren een natuurlijk amfitheater.'
  },
  {
    id: 2,
    src: '/src/assets/algarve-sunset-beach.jpg', 
    title: 'Ponta da Piedade',
    location: 'Lagos, West Algarve',
    description: 'Iconische rotsen en grotten bij zonsondergang - het Instagram icoon van de Algarve',
    category: 'Natuur',
    story: 'Deze door wind en zee gebeeldhouwde rotsenformaties zijn miljoenen jaren oud. Kajakken bij zonsondergang is een must-do ervaring die je nooit vergeet.'
  },
  {
    id: 3,
    src: '/src/assets/algarve-coastal-road.jpg',
    title: 'Kustweg naar Sagres',
    location: 'West Algarve',
    description: 'Spectaculaire rit langs de wilde westkust - de meest fotogenieke weg van Portugal',
    category: 'Roadtrips',
    story: 'Deze kustroute biedt adembenemende uitzichten op kliffen van 100 meter hoog. Stop bij Carrapateira voor verse vis en ongerepte stranden.'
  },
  {
    id: 4,
    src: '/src/assets/algarve-local-market.jpg',
    title: 'Loulé Markt',
    location: 'Loulé, Centraal Algarve', 
    description: 'Authentieke zaterdagmarkt vol lokale producten - waar locals hun boodschappen doen',
    category: 'Cultuur',
    story: 'Deze 140 jaar oude markt in Moorse stijl is het kloppende hart van Loulé. Kom op zaterdag voor vers fruit, kaas, honing en traditioneel ambacht.'
  },
  {
    id: 5,
    src: '/src/assets/algarve-family-beach.jpg',
    title: 'Praia da Falésia',
    location: 'Albufeira, Centraal Algarve',
    description: 'Kilometerslang gouden zand met rode kliffen - perfect voor families met kinderen',
    category: 'Stranden',
    story: 'Met 6 kilometer ononderbroken strand en ondiepe wateren is dit het perfecte gezinsstrand. De rode kliffen bieden natuurlijke schaduw in de middag.'
  },
  {
    id: 6,
    src: '/src/assets/algarve-villa-pool.jpg',
    title: 'Traditionale Quinta',
    location: 'Binnenland Algarve',
    description: 'Authentiek verblijf tussen de citroen- en olijfbomen - pure rust en privacy',
    category: 'Accommodaties',
    story: 'Het Algarve binnenland biedt authentieke quintas omringd door amandel-, vijgen- en johannesbroodbomen. Hier proef je het echte landelijke Portugal.'
  },
  {
    id: 7,
    src: '/src/assets/destinations/benagil-hero.jpg',
    title: 'Benagil Cave',
    location: 'Benagil, Centraal Algarve',
    description: 'De beroemdste zeegrot van Europa met natuurlijk dakraam - alleen bereikbaar per boot',
    category: 'Natuur',
    story: 'Deze kathedraalgrotte met zijn iconische opening naar de hemel trekt jaarlijks honderdduizenden bezoekers. Ga vroeg voor de beste foto\'s zonder massa\'s.'
  },
  {
    id: 8,
    src: '/src/assets/destinations/tavira-hero.jpg',
    title: 'Tavira Stad',
    location: 'Tavira, Oost Algarve',
    description: 'Pittoresk stadje met 37 kerken en een Romeinse brug - het meest elegante stadje van de Algarve',
    category: 'Cultuur',
    story: 'Tavira ontsnapte aan de grote aardbeving van 1755 en behield zo zijn authentieke architectuur. De stad wordt ook wel het Venetië van de Algarve genoemd.'
  },
  {
    id: 9,
    src: '/src/assets/destinations/lagos-hero.jpg',
    title: 'Lagos Centrum',
    location: 'Lagos, West Algarve',
    description: 'Historische havenstad met levendige atmosfeer - het uitgaansmekka van de Algarve',
    category: 'Cultuur',
    story: 'Lagos was het vertrekpunt voor veel ontdekkingsreizen in de 15e eeuw. Nu is het een bruisend centrum voor backpackers en surfers uit heel Europa.'
  },
  {
    id: 10,
    src: '/src/assets/destinations/vilamoura-hero.jpg',
    title: 'Vilamoura Marina',
    location: 'Vilamoura, Centraal Algarve',
    description: 'Luxe jachthaven met 1000+ ligplaatsen - het Monaco van Zuid-Portugal',
    category: 'Luxe',
    story: 'Deze prestigieuze marina is het grootste jachthavencomplex van Portugal. Omringd door championship golfbanen en 5-sterren resorts.'
  },
  {
    id: 11,
    src: '/src/assets/destinations/silves-hero.jpg',
    title: 'Silves Kasteel',
    location: 'Silves, Centraal Algarve',
    description: 'Rood zandstenen kasteel uit Moorse tijd - de voormalige hoofdstad van de Algarve',
    category: 'Geschiedenis',
    story: 'Dit imposante kasteel was ooit het centrum van het Moorse koninkrijk. Vanaf de muren heb je een panoramisch uitzicht over de citrusboomgaarden.'
  },
  {
    id: 12,
    src: '/src/assets/destinations/sagres-hero.jpg',
    title: 'Cabo de São Vicente',
    location: 'Sagres, West Algarve',
    description: 'Het meest zuidwestelijke punt van Europa - waar de zon het laatst ondergaat',
    category: 'Natuur',
    story: 'Dit dramatische kaap werd door de Romeinen "het einde van de wereld" genoemd. De vuurtoren weerstaat de krachtigste golven van de Atlantische Oceaan.'
  },
  {
    id: 13,
    src: '/src/assets/destinations/faro-hero.jpg',
    title: 'Faro Oude Stad',
    location: 'Faro, Oost Algarve',
    description: 'Ommuurde historische binnenstad met kathedraal - de onderschatte hoofdstad van de Algarve',
    category: 'Cultuur',
    story: 'Faro\'s Cidade Velha is omgeven door eeuwenoude stadsmuren. Klim naar de top van de kathedraal voor het beste uitzicht over de Ria Formosa lagune.'
  },
  {
    id: 14,
    src: '/src/assets/destinations/olhao-hero.jpg',
    title: 'Olhão Vismarkt',
    location: 'Olhão, Oost Algarve',
    description: 'Levendige vismarkt in kubistische architectuur - het authenticste vissersstadje van de Algarve',
    category: 'Lokaal Leven',
    story: 'Deze Art Deco markt uit 1912 is het hart van de grootste vissersvloot van Portugal. Kom vroeg voor verse tonijn en octopus rechtstreeks van de boot.'
  },
  {
    id: 15,
    src: '/src/assets/destinations/albufeira-hero.jpg',
    title: 'Albufeira Strand',
    location: 'Albufeira, Centraal Algarve',
    description: 'Het levendigste resort van de Algarve - 25 stranden en bruisend nachtleven',
    category: 'Stranden',
    story: 'Van vissersstadje naar toeristische hotspot: Albufeira combineert prachtige stranden met \'s nachts feesten tot de vroege uurtjes. De beroemde Strip is legendarisch.'
  }
];

const categories = ['Alle', 'Stranden', 'Natuur', 'Cultuur', 'Geschiedenis', 'Luxe', 'Lokaal Leven', 'Roadtrips'];

const AlgarveGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'Alle' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Algarve Foto Galerij
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Laat je inspireren door de natuurlijke schoonheid en culturele rijkdom van de Algarve
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category);
                setCurrentImageIndex(0);
              }}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Gallery Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Featured Large Image */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="relative">
              <div 
                className="h-80 lg:h-96 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${filteredImages[currentImageIndex]?.src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4" />
                  <span className="text-sm bg-primary/80 px-2 py-1 rounded-full">
                    {filteredImages[currentImageIndex]?.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {filteredImages[currentImageIndex]?.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{filteredImages[currentImageIndex]?.location}</span>
                </div>
                <p className="text-white/90 text-sm mb-2">
                  {filteredImages[currentImageIndex]?.description}
                </p>
                {filteredImages[currentImageIndex]?.story && (
                  <p className="text-white/80 text-xs italic border-l-2 border-primary/60 pl-3">
                    {filteredImages[currentImageIndex]?.story}
                  </p>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Meer Foto's</h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {filteredImages.slice(1, 5).map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(index + 1)}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:scale-105 transition-transform duration-200"
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-white text-xs font-medium bg-black/50 rounded px-2 py-1">
                    {image.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Counter */}
      <div className="text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-sm text-muted-foreground">
            {currentImageIndex + 1} van {filteredImages.length}
          </span>
          <div className="flex gap-1">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
        
        <Button variant="outline" className="hover:scale-105 transition-transform">
          🖼️ Bekijk Alle {galleryImages.length} Foto's
        </Button>
      </div>
    </div>
  );
};

export default AlgarveGallery;