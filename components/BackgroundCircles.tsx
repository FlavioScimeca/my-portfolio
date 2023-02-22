import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.4],
        borderRadius: ['20%', '20%', '50%', '80%'],
      }}
      transition={{
        duration: 2.2,
      }}
      className="relative flex justify-center items-center mt-48 md:mt-28"
    >
      <div className="absolute h-[140px] w-[140px] border-2 rounded-full border-[#448720] md:h-[200px] md:w-[200px] mt-40 animate-ping" />
      <div className="hidden md:block absolute border rounded-full border-[#e5e5e5] h-[300px] w-[300px] mt-40" />
      <div className="absolute h-[310px] w-[310px] border rounded-full border-[#dfdfdf] md:h-[450px] md:w-[450px] mt-40" />
      <div className="absolute h-[370px] w-[370px] border-4 rounded-full border-[#448720] md:h-[500px] md:w-[500px] mt-40 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
