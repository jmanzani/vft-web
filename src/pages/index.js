import Layout from "@/components/layout";
import Image from "next/image";

import vftLogo from "../../public/logo_VFT_2.png"

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-2">
        <span className="text-black dark:text-white mt-52 mx-10">
          <p className="text-5xl font-bold">Bienvenidos a VFT eSports</p>
          <br/>
          <h3>Pasión, velocidad, competición y emoción.</h3>
        </span>
        <span>
          <Image src={vftLogo} alt="Logo de VFT eSports"/>
        </span>
      </div>
    </Layout>
  );
}
