import React from 'react';
import { MapPin, Home, Ruler } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  area: string;
  price: string;
  image: string;
}

export function ProjectCard({ title, location, area, price, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
          Disponible
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Ruler className="w-4 h-4 mr-2" />
            <span>{area}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <span>Lote residencial</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">{price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}