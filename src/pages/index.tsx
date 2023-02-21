import Head from 'next/head';
import { Inter } from '@next/font/google';

import Link from 'next/link';
import Image from 'next/image';
import { GetServerSideProps, GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from 'typing';
import { fetchPageInfo } from 'utils/fetchPageinfo';
import { fetchSkills } from 'utils/fetchSkills';
import { fetchSocial } from 'utils/fetchSocials';
import { fetchExperiences } from 'utils/fetchExperiences';
import { fetchProject } from 'utils/fetchProjects';
import Header from 'components/Header';
import Hero from 'components/Hero';
import About from 'components/About';
import ExperienceComponent from 'components/Experience';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import ContactMe from 'components/ContactMe.jsx';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

export default function Home({ skills, projects, socials }: Props) {
  return (
    <div className="bg-[rgb(46,50,50)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 text-white md:scrollbar scrollbar-track-gray-400 scrollbar-thumb-orange-400 scroll-smooth">
      <Head>
        <title>My portfolio</title>
      </Head>
      <div>
        <Header socials={socials} />

        <section id="hero" className=" snap-start">
          <Hero />
        </section>

        <section id="about" className=" snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <ExperienceComponent />
        </section>

        <section id="skills" className="snap-center">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-center">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </div>
    </div>
  );
}

export const GetServerSideProp: GetServerSideProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();
  const projects: Project[] = await fetchProject();

  return {
    props: {
      skills,
      socials,
      projects,
    },
  };
};
