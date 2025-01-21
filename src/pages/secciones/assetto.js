import Layout from "@/components/layout";
import DriverList from "@/components/DriverList";
import { getDriversBySection } from "../api/albums";

export default function Assetto({ drivers }) {
  return (
    <Layout>
      <div className="text-white">
        <p className="text-5xl font-bold">Sobre Nosotros</p>
        <br />
        <br />
        <p className="text-2xl">VFT eSports nació...</p>
      </div>

      {/* Lista de pilotos */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-white mb-4">Nuestros Pilotos</h2>
        <DriverList drivers={drivers} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const sectionId = 1;
  const drivers = await getDriversBySection(sectionId);

  // Serializa las imágenes a Base64
  const serializedDrivers = drivers.map(driver => ({
    ...driver,
    driverImage: driver.driverImage
      ? Buffer.from(driver.driverImage).toString('base64')
      : null,
  }));
  
  return {
    props: {
      drivers: serializedDrivers,
    },
  };
}
