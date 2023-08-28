import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Influential Codes</title>
        <meta name="description" content="The search engine for brands, content creators and discounts." />
        <link rel="icon" href="/favicon.ico" />
        {/* TODO: change this favicon */}
      </Head>
      <main className="text-slate-950 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FDFDFF] to-[#ffffff]">
        <div className="w-full flex justify-center sticky top-0 py-2 bg-white">
          <div className="max-w-xl w-full flex justify-between bg-white">
            <div>Influential Codes </div>
            <button className="hover:shadow-sm hover:border bg-[#92FFF1] rounded-lg py-2 px-4"> Try it now</button>
          </div>
        </div>
        <div className="min-h-screen container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem] max-w-xxl">
            Save, shop and support <br />  your fave <br /> content creators.
          </h1>
          <button className="hover:shadow-sm hover:border bg-[#92FFF1] rounded-lg py-2 px-4"> Try it now </button>
          <div className="text-3xl animate-bounce"> ↓ </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 gap-4 mb-16">
          <p className="font-semibold"> Find your favourite influencer, and all the brands they have discounts for. </p>
          <div> image will go here </div>
          <p className="font-semibold"> Find your favourite brands and discover the influencers your favorite brands sponsor. </p>
          <div> image will go here </div>
          <p className="font-semibold"> Save while shopping and support influencers and brands you love. </p>
          <div> image will go here </div>
          <button className="hover:shadow-sm hover:border bg-[#92FFF1] rounded-lg py-2 px-4"> Try it now </button>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4 shadow-md bg-white p-8 rounded-lg w-full max-w-xl my-16">
          <h2 className="font-semibold text-2xl"> Keep in touch </h2>
          <p>Join our mailing list to hear about our updates first </p>
          <div className="flex flex-row justify-center gap-4">
            <input className="border-b border-b-teal-500 py-2 px-4 w-full" placeholder="name@email.com" />
            <button className="hover:shadow-sm hover:border bg-[#92FFF1] rounded-lg py-2 px-4 w-full"> Sign up</button>
          </div>
        </div>
        <footer className="bg-slate-100 w-full flex justify-center py-32">
          <div className="max-w-xl flex flex-row gap-4">
            <a className="p-2"> contact us </a>
            <a className="p-2"> share feedback </a>
            <a className="p-2"> privacy policy </a>
          </div>
        </footer>
      </main>
    </>
  );
}
