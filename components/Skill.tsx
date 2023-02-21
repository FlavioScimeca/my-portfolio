import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from 'typing';
import { urlFor } from '../lib/client';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group w-full relative flex flex-col cursor-pointer justify-center items-center">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        alt=""
        src={urlFor(skill.image).url()}
        className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <p className=" text-sm ">{skill.title}</p>
    </div>
  );
};

export default Skill;
