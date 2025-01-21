import Layout from "@/components/layout";
import Image from "next/image";

import vftLogo from "../../public/logo_VFT_2.png"

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-2">
        <span className="text-white mt-52 mx-10">
          <p className="text-5xl font-bold">Bienvenidos a VFT eSports</p>
          <br/>
          <h3>Pasión, velocidad, competición y emoción.</h3>
        </span>
        <span>
          <Image src={vftLogo} alt="Logo de VFT eSports"/>
        </span>
      </div>
      <section className="bg-gray-300 dark:bg-gray-900 mb-40">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sobre nosotros</h2>
            <p className="mb-4">Somos un club joven, con ganas de todo. Y aun nos queda mucho por ganar!</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
          </div>
        </div>
      </section>
    </Layout>
  );
}
