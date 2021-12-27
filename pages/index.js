import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import { useState } from 'react';
import Login from "../components/Login";
export default function Home({ results }) {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div>
      <Head>
        <title>MRDb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onClick={() => (modalOpen ? close() : open())} />
      <Nav />
      <Results results={results} />
      <Login />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
