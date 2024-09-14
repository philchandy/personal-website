import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import GrainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Company Z",
    year: "2024",
    title: "Landing Page",
    results: [
      { title: "Example" },
      { title: "Example" },
      { title: "Example" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Company Y",
    year: "2024",
    title: "Landing Page",
    results: [
      { title: "Example" },
      { title: "Example" },
      { title: "Example" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Company X",
    year: "2024",
    title: "Landing Page",
    results: [
      { title: "Example" },
      { title: "Example" },
      { title: "Example" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradien-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          Real World Results
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl ">Featured Projects</h2>
      <p className="text-center md:text-lg max-w-md mx-auto mt-4 text-white/60 lg:text-xl">
        See How I transformed concepts into engaging digital experiences
      </p>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project) => (
          <Card 
            key={project.title} 
            className= "px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:pl-20 lg:pr-0"
          >
            <div className=" lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16"> 
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
                inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent
                bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                      <CheckIcon className='size-5 md:size-6' />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                    <span>View Live Site</span>
                    <ArrowUpRight className='size-4' />
                  </button>
                </a>
              </div>
              <div className="relative pr-0">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};
