import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const DriverCard = ({ nombre, numero, apodo, victorias, podios, carreras, imagen }) => {
  const [imagenUrl, setImagenUrl] = useState(null);

  useEffect(() => {
    // Convertir el Base64 a una URL válida si está presente
    if (imagen) {
      setImagenUrl(`data:image/jpeg;base64,${imagen}`);
    }
  }, [imagen]);

  return (
    <div className="flex flex-col items-center bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6 max-w-xl mx-auto">
      {/* Imagen del piloto */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
        {imagenUrl && (
          <Image
            src={imagenUrl}
            alt={`Imagen de ${nombre}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </div>

      {/* Información del piloto */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
          {nombre} <span className="text-gray-500">#{numero}</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-300 italic mb-4">"{apodo}"</p>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{victorias}</span>
            <span>Victorias</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{podios}</span>
            <span>Podios</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{carreras}</span>
            <span>Carreras</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
