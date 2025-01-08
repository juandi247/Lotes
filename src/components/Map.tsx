import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { LotModal } from './LotModal';

interface MapProps {
  projectId: number;
  center: { lat: number; lng: number };
  lots: any[];
}
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
    if (!mapRef.current) return;

    const loader = new Loader({
      apiKey: 'AIzaSyAxqMS8hSon1ZxNV9GnJN4LzagScPZZZYA',
      version: 'weekly',
    });

    loader.load().then(() => {
      const mapInstance = new google.maps.Map(mapRef.current!, {
        center,
        zoom: 16,
        mapTypeId: 'satellite', // Set default to satellite view
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });
      setMap(mapInstance);
    });
  }, [center]);

  useEffect(() => {
    if (!map || lots.length === 0) return;

    lots.forEach((lote) => {
      const polygon = new google.maps.Polygon({
        paths: lote.coordenadas,
        strokeColor: lote.status === 'DISPONIBLE' ? '#2563EB' : '#EF4444',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: lote.status === 'DISPONIBLE' ? '#3B82F6' : '#F87171',
        fillOpacity: 0.35,
        map: map,
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
        map: map,
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
  }, [map, lots]);

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