"use client";

import { motion, AnimatePresence } from "framer-motion";
import CodeIcon from "../Icons/CodeIcon";
import DesignIcon from "../Icons/DesignIcon";
import IconsIcon from "../Icons/IconsIcon";
import DatabaseIcon from "../Icons/DatabaseIcon";
import Link from "next/link";

const CardsComponent = () => {
  const cards = [
    {
      title: "Icons",
      path: "/icons",
      icon: <IconsIcon w="130" />,
    },
    {
      title: "Code",
      path: "/code",
      icon: <CodeIcon w="130" />,
    },
    {
      title: "Design",
      path: "/design",
      icon: <DesignIcon w="130" />,
    },
    {
      title: "Design",
      path: "/design",
      icon: <DatabaseIcon w="130" />,
    },
  ];

  return (
    <AnimatePresence>
      <section className="w-full h-screen">
        <div className="relative w-full h-full flex items-center justify-start flex-col container mx-auto pt-40 pb-20 px-20 gap-10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full h-[1px] bg-white/80 absolute top-0 left-0"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, h: 0 }}
            animate={{ opacity: 1, h: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full h-full bg-gradient-to-b from-white/10 absolute top-0 left-0"
          ></motion.div>

          <div className="overflow-hidden w-full absolute top-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 px-20"
            >
              {cards?.map((card) => (
                <Link href={card?.path} key={card?.title}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-[409px] cursor-pointer bg-[#1A1A1A] border-2 border-[#555] hover:border-[#ffffff90] rounded-3xl flex items-center justify-center transition-all"
                  >
                    {card?.icon}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default CardsComponent;
