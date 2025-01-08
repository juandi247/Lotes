import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { LotModal } from './LotModal';

interface MapProps {
  projectId: number;
  center: { lat: number; lng: number };
  lots: any[];
}

export function Map({ projectId, center, lots }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLot, setSelectedLot] = useState<any | null>(null);

  useEffect(() => {
    if (!mapRef.current || !lots.length) return;

    const loader = new Loader({
      apiKey: 'AIzaSyAxqMS8hSon1ZxNV9GnJN4LzagScPZZZYA',
      version: 'weekly',
    });

    loader.load().then(() => {
      // Usamos el centro proporcionado como punto inicial
      const initialView = center;
      
      // Usamos la primera coordenada del primer lote como destino final
      const targetLot = lots[0].coordenadas[0];

      const mapInstance = new google.maps.Map(mapRef.current!, {
        center: initialView,
        zoom: 4,
        mapTypeId: 'satellite',
        tilt: 0,
        disableDefaultUI: true,
        gestureHandling: 'none',
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      });
      setMap(mapInstance);

      const steps = [
        { zoom: 3, delay: 100 },  
        { zoom: 5, delay: 100 },      // Vista de Colombia
        { zoom: 6, delay: 300 },   // Región general
        { zoom: 8, delay: 300 },   // Departamento
        { zoom: 10, delay: 600 },  // Ciudad
        { zoom: 12, delay: 600 },  // Zona
        { zoom: 14, delay: 600 },  // Zona
        { zoom: 16, delay: 300 }   // Vista final
      ];

      let currentStep = 0;

      const animate = () => {
        if (currentStep >= steps.length) {
          mapInstance.setOptions({
            center: targetLot,
            disableDefaultUI: false,
            gestureHandling: 'cooperative',
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          });
          drawLots(mapInstance);
          return;
        }

        const step = steps[currentStep];
        
        const currentCenter = mapInstance.getCenter()!;
        const targetLat = currentCenter.lat() + (targetLot.lat - currentCenter.lat()) * 0.2;
        const targetLng = currentCenter.lng() + (targetLot.lng - currentCenter.lng()) * 0.2;
        
        mapInstance.setOptions({
          center: { lat: targetLat, lng: targetLng },
          zoom: step.zoom
        });

        currentStep++;
        setTimeout(animate, step.delay);
      };

      setTimeout(animate, 500);
    });
  }, [center, lots]);

  const drawLots = (mapInstance: google.maps.Map) => {
    lots.forEach((lote) => {
      const polygon = new google.maps.Polygon({
        paths: lote.coordenadas,
        strokeColor: lote.status === 'DISPONIBLE' ? '#2563EB' : '#EF4444',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: lote.status === 'DISPONIBLE' ? '#3B82F6' : '#F87171',
        fillOpacity: 0.35,
        map: mapInstance,
      });

      polygon.addListener('click', () => {
        setSelectedLot(lote);
      });

      polygon.addListener('mouseover', () => {
        polygon.setOptions({
          fillOpacity: 0.5,
          strokeWeight: 3,
        });
      });

      polygon.addListener('mouseout', () => {
        polygon.setOptions({
          fillOpacity: 0.35,
          strokeWeight: 2,
        });
      });

      const bounds = new google.maps.LatLngBounds();
      lote.coordenadas.forEach((coord: any) => bounds.extend(coord));
      const center = bounds.getCenter();

      new google.maps.Marker({
        position: center,
        map: mapInstance,
        label: {
          text: lote.numeroLote.toString(),
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: 'bold',
        },
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 0,
        },
      });
    });
  };

  return (
    <>
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-lg shadow-lg"
      />
      <LotModal 
        lote={selectedLot} 
        onClose={() => setSelectedLot(null)}
      />
    </>
  );
}