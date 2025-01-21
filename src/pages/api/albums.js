import { query } from "../../../data/db";

export async function getDriversBySection(sectionId) {
  const sql = 'SELECT * FROM drivers join sectionDrivers on DriverId = SectionId where SectionId = ? order by wins desc';
  const driversSQL = await query(sql, [sectionId]);
  // Convertir la fecha de cada álbum a un formato de cadena
  const albums = driversSQL.map(driver => ({
    ...driver
  }));
  
  return albums;
}