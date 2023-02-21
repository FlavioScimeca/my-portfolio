import React from 'react';
import { motion } from 'framer-motion';
import SkillComponent from './Skill';
import { Skill } from 'typing';

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="h-screen flex relative mt-28 flex-col text-center md:text-left xl:flex-row max-w-[1800px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="top-16 absolute uppercase tracking-[15px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 pt-32">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <SkillComponent key={skill._id} directionLeft={true} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillComponent key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
