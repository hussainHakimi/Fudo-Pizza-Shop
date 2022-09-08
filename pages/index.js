import Head from "next/head";
import Hero from "../components/Hero";
import { Layout } from "../components/Layout";
import Services from "../components/Services";

export default function Home() {
  return (
    // <Layout>
    <div className="py-[1rem] px-[2rem]">
      <Head>
        <title>FUDO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      {/* body */}
      <Hero />
      <Services />
    </div>
    // </Layout>
  );
}
