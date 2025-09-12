import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/src/assets/algarve-hero-beach.jpg',
    title: 'Praia da Marinha',
    location: 'Centraal Algarve',
    description: 'Een van de mooiste stranden ter wereld volgens Michelin',
    category: 'Stranden'
  },
  {
    id: 2,
    src: '/src/assets/algarve-sunset-beach.jpg', 
    title: 'Ponta da Piedade',
    location: 'Lagos, West Algarve',
    description: 'Iconische rotsen en grotten bij zonsondergang',
    category: 'Natuur'
  },
  {
    id: 3,
    src: '/src/assets/algarve-coastal-road.jpg',
    title: 'Kustweg naar Sagres',
    location: 'West Algarve',
    description: 'Spectaculaire rit langs de wilde westkust',
    category: 'Roadtrips'
  },
  {
    id: 4,
    src: '/src/assets/algarve-local-market.jpg',
    title: 'Loulé Markt',
    location: 'Centraal Algarve', 
    description: 'Authentieke zaterdagmarkt vol lokale producten',
    category: 'Cultuur'
  },
  {
    id: 5,
    src: '/src/assets/algarve-family-beach.jpg',
    title: 'Praia da Falésia',
    location: 'Albufeira',
    description: 'Kilometerslang gouden zand, perfect voor families',
    category: 'Stranden'
  },
  {
    id: 6,
    src: '/src/assets/algarve-villa-pool.jpg',
    title: 'Traditionale Villa',
    location: 'Binnenland Algarve',
    description: 'Authentiek verblijf tussen de citroen- en olijfbomen',
    category: 'Accommodaties'
  }
];

const categories = ['Alle', 'Stranden', 'Natuur', 'Cultuur', 'Roadtrips', 'Accommodaties'];

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
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
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
                <p className="text-white/90 text-sm">
                  {filteredImages[currentImageIndex]?.description}
                </p>
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