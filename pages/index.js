import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <div>
      <Head>
        <title>MRDb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
    </div>
  );
}
