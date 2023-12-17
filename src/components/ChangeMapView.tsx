import { useEffect } from 'react';
import { useMap } from 'react-leaflet';


interface ChangeViewProps {
  center: [number, number];
  zoom: number;
}

export const ChangeView = ({ center, zoom }: ChangeViewProps) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, {
      animate: true,
      duration: 1.5   // durée de l'animation en secondes
    });
  }, [center, zoom, map]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}