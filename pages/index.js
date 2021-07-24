import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>MRDb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
