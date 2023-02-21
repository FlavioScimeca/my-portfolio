import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ['Ciao! io sono', 'Flavio Scimeca', '<full stack developer />'],
    loop: true,
    delaySpeed: 1200,
  });
  return (
    <div className=" relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="rounded-full -m-6"
        height={200}
        width={200}
        alt=""
        src="/images/foto1.jpg"
        style={{ objectFit: 'contain' }}
      />
      <div className="relative">
        <h2 className="text-xl uppercase text-gray-500 pb-2 font-semibold tracking-[10px] mt-7">
          Junior Web Developer
        </h2>
        <h1 className=" absolute w-full text-4xl lg:text-5xl font-semibold px-10">
          <span className=" mr-3 text-[#448720]">{text}</span>
          <Cursor cursorColor="#7BC950" />
        </h1>
        <div className="w-full space-x-3 space-y-4 mt-28 md:mt-32">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Education</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton flex-1">Project s</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
