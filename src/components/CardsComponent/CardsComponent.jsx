"use client";

import { motion, AnimatePresence } from "framer-motion";
import CodeIcon from "../Icons/CodeIcon";
import DesignIcon from "../Icons/DesignIcon";
import IconsIcon from "../Icons/IconsIcon";
import DatabaseIcon from "../Icons/DatabaseIcon";
import Link from "next/link";
import StylesIcon from "../Icons/StylesIcon";
import AnimationIcon from "../Icons/AnimationIcon";
import ChartIcon from "../Icons/ChartIcon";
import ApiIcon from "../Icons/ApiIcon";
import PlusIcon from "../Icons/PlusIcon";

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
      title: "Animation",
      path: "/animation",
      icon: <AnimationIcon w="130" />,
    },
    {
      title: "Styles",
      path: "/styles",
      icon: <StylesIcon w="130" />,
    },
    {
      title: "DataBase",
      path: "/db",
      icon: <DatabaseIcon w="130" />,
    },

    {
      title: "Chrats",
      path: "/charts",
      icon: <ChartIcon w="130" />,
    },
    {
      title: "Api",
      path: "/apis",
      icon: <ApiIcon w="130" />,
    },
    {
      title: "More",
      path: "/more",
      icon: <PlusIcon w="130" />,
    },
  ];

  return (
    <AnimatePresence>
      <section className="w-full h-full">
        <div className="relative w-full h-auto flex items-center justify-start flex-col container mx-auto pt-10 pb-20 px-20 gap-10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full h-[1px] bg-white/80 absolute top-0 left-0"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, h: 0 }}
            animate={{ opacity: 1, h: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-full h-full bg-gradient-to-b from-white/10 absolute top-0 left-0"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 px-20"
          >
            {cards?.map((card, index) => (
              <Link href={card?.path} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full overflow-hidden h-96 cursor-pointer bg-[#1A1A1A] border-2 border-[#555] hover:border-[#ffffff90] rounded-3xl flex items-center justify-center transition-all"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] transition-all"></div>
                  {card?.icon}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default CardsComponent;
