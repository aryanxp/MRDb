import Thumbnail from "./Thumbnail";
import { AnimatePresence, motion } from "framer-motion";
function Results({ results }) {
  return (
    <motion.div
      layout
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      <AnimatePresence>
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default Results;
