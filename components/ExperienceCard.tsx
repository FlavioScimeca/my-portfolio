import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="mt-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:h-[450px] snap-center p-7 bg-[#292929] cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="images/aulab-logo.png"
        alt=""
        className="w-32 h-32 rounded-full xl:w-[170px] xl:h-[170px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-[#ffed00]">Aulab</h4>
        <p className="font-bold text-2xl mt-1">Corso full stack developer</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 text-gray-600">
          novembre-2022 / febbraio-2023
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
