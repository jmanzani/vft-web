import vftLogoDarkMode from "../../public/vftLogoDarkMode.png";
import vftLogoClearMode from "../../public/vftLogoClearMode.png";
import snoopLogo from "../../public/SNOOP_Logo 1.png";
import emixLogo from "../../public/Emix.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (


    <footer class="bg-gray-200 rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <a href="./">
              <Image src={vftLogoDarkMode} alt="VFT Logo" width={150} className="hidden dark:block" />
              <Image src={vftLogoClearMode} alt="VFT Logo" width={150} className="block dark:hidden" />
            </a>
            <Image src={snoopLogo} alt="SNOOP Logo" width={150} className="" />
            <Link href="https://emixgaming.es/categoria-producto/vft-esports/">
              <Image src={emixLogo} alt="Emix Gaming Logo" width={150} className="" />
            </Link>
          </span>
          
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©2025 
          <a href="./" class="hover:underline"> VFT eSports</a>. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}