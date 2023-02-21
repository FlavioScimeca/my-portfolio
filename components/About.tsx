import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative justify-center flex-col md:flex-row px-10 mx-auto items-center"
    >
      <h3 className=" top-16 absolute uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="space-y-10 px-0 md:px-10 h-screen  flex flex-col justify-end mb-20">
        <h4 className=" text-start font-semibold text-4xl mt-4 md:mt-24">
          About <span className="underline-custom"> me </span>
        </h4>
        <p className="leading-7 md:text-lg text-left max-w-3xl">
          Come sviluppatore web junior, sono costantemente impegnato ad ampliare
          le mie competenze e conoscenze nel settore. Ho una solida base in
          <span className="underline-custom"> Javascript</span> e attualmente
          sto studiando, tecnologie come{' '}
          <span className="underline-custom"> ReactJS</span> e{' '}
          <span className="underline-custom"> NextJS</span>, per migliorare
          ulteriormente le mie capacità {'('}date un{"'"}
          occhiata al mio Github{')'}. Sono appassionato di creazione di siti
          web intuitivi e user-friendly. Sono desideroso di applicare le mie
          competenze a progetti reali e di contribuire al successo di un{' '}
          <span className="underline-custom"> team dinamico</span>.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
