import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from 'typing';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { urlFor } from '../lib/client';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="top-16 absolute uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-orange-400">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-32 md:mt-16 h-screen "
          >
            <div className=" w-screen md:w-1/2">
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={2500}
              >
                {project.image.map((image) => (
                  <div key={image.asset._ref}>
                    <Image
                      width={500}
                      height={300}
                      src={urlFor(image).url()}
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-5xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Progetto {index + 1} di {projects.length}:
                </span>{' '}
                {project.title}
              </h4>
              <p className="text-center md:text-left">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
