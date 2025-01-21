import React from 'react';
import DriverCard from './DriverCard';

export default function DriverList({ drivers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {drivers.map((driver) => (
        <DriverCard 
          key={driver.Id} // Clave única por piloto
          nombre={driver.Name} 
          numero={driver.Number} 
          apodo={driver.Nickname} 
          victorias={driver.Wins}
          podios={driver.Podiums}
          carreras={driver.Races}
          imagen={driver.driverImage}
        />
      ))}
    </div>
  );
}