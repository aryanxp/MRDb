import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import Modal from "../components/Modal";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
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
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
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
