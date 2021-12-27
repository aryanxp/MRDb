import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";

export default function Login() {
    return (
        <div>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
        </div>
    )
}