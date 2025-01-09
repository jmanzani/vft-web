import vftLogoDarkMode from "../../public/vftLogoDarkMode.png";
import vftLogoClearMode from "../../public/vftLogoClearMode.png";
import snoopLogo from "../../public/SNOOP_Logo 1.png";
import emixLogo from "../../public/Emix.png";
import Image from "next/image";
import Link from "next/link";
import YouTube from "./icons/youtube";
import Twitch from "./icons/twitch";
import XformerlyTwitter from "./icons/twitter";
import Instagram from "./icons/instagram";
import TikTok from "./icons/tiktok";

export default function Footer() {
  return (
    <footer class="bg-gray-200 rounded-lg shadow dark:bg-gray-900">
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
          
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://www.tiktok.com/@vft.esports" target="_blank" className="mx-4 md:mx-6"><TikTok className="w-8 h-8 mx-1 md:mx-2" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/vft.esports" target="_blank" className="mx-4 md:mx-6"><Instagram className="w-8 h-8 mx-1 md:mx-2" /></a>
            </li>
            <li>
              <a href="https://x.com/vft_esports" target="_blank" className=""><XformerlyTwitter className="w-8 h-8 mx-1 md:mx-2" /></a>
            </li>
            <li>
              <a href="https://twitch.tv/vft_esports" target="_blank" className=""><Twitch className="w-10 h-10 mx-1 md:mx-2" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/@vft_esports" target="_blank" className=""><YouTube className="w-10 h-10 mx-1 md:mx-2" /></a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©2025 
          <a href="./" className="hover:underline"> VFT eSports</a>. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}