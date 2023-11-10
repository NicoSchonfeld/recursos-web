"use client";

import { FcGoogle } from "react-icons/fc";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const HomeComponent = ({ submit, textSearch, setTextSearch }) => {
  return (
    <AnimatePresence>
      <section className="w-full h-auto bg-gradient-to-b from-white/10">
        <div className="w-full h-full flex items-center justify-start flex-col container mx-auto py-40 px-20 gap-10">
          <div className="flex flex-col gap-3">
            <span className="overflow-hidden">
              <motion.h1
                initial={{ y: 70 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
              >
                Tus recursos en una sola web
              </motion.h1>
            </span>

            <span className="overflow-hidden">
              <motion.p
                initial={{ y: 70 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-center text-gray-500"
              >
                Encontra todos tus recursos que usas dia a dia para programar o
                diseñar en un solo lugar.
              </motion.p>
            </span>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            onSubmit={submit}
            className="bg-[#191919] w-[500px] h-auto px-5 py-1.5 flex items-center justify-between border border-white/50 rounded-full"
          >
            <label
              htmlFor="searchID"
              className="flex items-center gap-3 cursor-text w-full"
            >
              <FcGoogle className="text-3xl" />
              <input
                id="searchID"
                type="text"
                placeholder="Bucar tambien con Google..."
                autoFocus
                className="bg-transparent active:outline-none focus:outline-none w-full pe-5"
                value={textSearch}
                onChange={(e) => setTextSearch(e?.target?.value)}
              />
            </label>
            <button type="submit">
              <BiSearchAlt2 className="text-xl" />
            </button>
          </motion.form>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default HomeComponent;
