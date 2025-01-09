import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
const layout = ({ children, description, title }) => {
  return (
    <div className="relative text-black">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
      </Head>
      <div class="absolute top-0 z-[-2] h-full w-full bg-[#000000] dark:bg-whit bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default layout;