import ContainerAside from "@/components/ContainerAside";
import ModeToggle from "@/components/ModeToggle";
import MyCard from "@/components/MyCard";
import SocialLinks from "@/components/SocialLinks";
import Stacks from "@/components/Stacks";
import { Skeleton } from "@/components/ui/skeleton";
import { EXPERIENCES_INFO } from "@/constants/experiences";
import { STACKS_INFO } from "@/constants/stacks";
import Image from "next/image";

import Anchor from "@/components/Anchor";
import GloboTech from "@/components/GloboTech";
import Repositories from "@/components/Repositories";
import { ArchiveIcon, BackpackIcon, RocketIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between relative 
      lg:flex-row lg:overflow-hidden"
    >
      <ModeToggle />

      <Anchor id="experience" className="lg:top-20" tooltip="Experiências">
        <BackpackIcon className="h-[1.2rem] w-[1.2rem] text-primary" />
      </Anchor>

      <Anchor id="project" className="lg:top-32" tooltip="Projetos">
        <ArchiveIcon className="h-[1.2rem] w-[1.2rem] text-primary" />
      </Anchor>

      <Anchor id="stack" className="lg:top-44" tooltip="Tecnologias">
        <RocketIcon className="h-[1.2rem] w-[1.2rem] text-primary" />
      </Anchor>

      <section
        className="flex flex-col gap-3 p-6 pb-16 
        lg:w-[50%] lg:h-lvh lg:content-start lg:justify-between lg:p-20 lg:pr-0 lg:z-0"
      >
        <Image
          src="./profile.png"
          alt="logo"
          width={160}
          height={160}
          className="lg:w-[150px] lg:h-[150px]"
        />

        <div className="flex flex-col">
          <span className="text-primary text-xl font-medium">Quem sou</span>
          <h1
            className="font-bold text-[2.7rem] text-title bg-clip-text
            lg:text-[2.7rem]"
          >
            {" "}
            Elivelton Ferreira
          </h1>
          <span className="text-text text-sm">Frontend & Mobile Developer</span>
        </div>

        <p className="text-sm  leading-7 text-text lg:tracking-normal lg:leading-9 lg:mr-20">
          O que me motiva é a busca incessante por desafios que me permitam
          aprender e crescer continuamente. Adoro colaborar em equipes
          inovadoras e trabalhar em projetos que nos tornam melhores a cada
          linha de código. Meu objetivo é continuar aprimorando minhas
          habilidades em React e desenvolver soluções web e mobile que ofereçam
          uma experiência de usuário excepcional.
        </p>

        <SocialLinks
          gitHub="https://github.com/eliveltonsf"
          instagram="https://www.instagram.com/eliveltonsf.dev/"
          linkedin="https://www.linkedin.com/in/eliveltonsf/"
          curriculum="https://drive.google.com/file/d/1EDtcBaeuR9GAjJBQi7QjU0TyF6Oh2Pr6/view"
        />
      </section>

      <aside
        className="flex flex-col justify-start items-start gap-3 w-full p-6 overflow-y-scroll
        lg:w-[50%] lg:h-lvh lg:p-20 lg:pl-0  lg:scroll-smooth lg:style-scrollbar-h lg:overflow-x-hidden 2xl:ml-20"
      >
        <GloboTech />

        <ContainerAside id="experience" title="Experience">
          {EXPERIENCES_INFO ? (
            EXPERIENCES_INFO.map((item, index) => (
              <MyCard
                key={index}
                title="Experience"
                date={item.period}
                name={item.name}
                link={item.linkedin}
                description={item.description}
                linkedin={item.linkedin}
                instagram={item.instagram}
                site={item.site}
              />
            ))
          ) : (
            <div className="flex flex-col">
              <Skeleton className="h-52 rounded-lg mb-4" />
              <Skeleton className="h-48 rounded-lg mb-4" />
              <Skeleton className="h-48 rounded-lg mb-4" />
              <Skeleton className="h-48 rounded-lg mb-4" />
            </div>
          )}
        </ContainerAside>

        <ContainerAside id="project" title="Project">
          <Repositories />
        </ContainerAside>

        <ContainerAside id="stack" title="Stack">
          <Stacks data={STACKS_INFO} />
        </ContainerAside>
      </aside>
    </main>
  );
}
