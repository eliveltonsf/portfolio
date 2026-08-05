"use client";

import ContainerAside from "@/components/ContainerAside";
import ModeToggle from "@/components/ModeToggle";
import MyCard from "@/components/MyCard";
import SocialLinks from "@/components/SocialLinks";
import Stacks from "@/components/Stacks";
import { Skeleton } from "@/components/ui/skeleton";
import { EXPERIENCES_INFO } from "@/constants/experiences";
import { STACKS_INFO } from "@/constants/stacks";
import { useEffect, useRef, useState } from "react";

import Anchor from "@/components/Anchor";
import GloboTech from "@/components/GloboTech";
import Repositories from "@/components/Repositories";
import { ArchiveIcon, BackpackIcon, RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  const asideRef = useRef<HTMLElement | null>(null);
  const [showAboutSection, setShowAboutSection] = useState(false);

  useEffect(() => {
    const asideElement = asideRef.current;
    const projectElement = document.getElementById("project");

    if (!projectElement) {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAboutSection(true);
          }
        });
      },
      {
        root: isDesktop ? asideElement : null,
        threshold: 0.25,
      },
    );

    observer.observe(projectElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between relative 
      lg:h-screen lg:flex-row lg:items-start lg:justify-start lg:overflow-hidden"
    >
      <GloboTech asWatermark />

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

      <section className="flex flex-col mt-10 gap-3 p-4 pb-12 sm:p-6 sm:pb-16 lg:mt-6 lg:w-[50%] lg:h-screen lg:overflow-hidden lg:sticky lg:top-0">
        <div
          className={`flex flex-col overflow-hidden transition-all duration-700 lg:h-lvh lg:content-start lg:justify-between lg:z-0`}
        >
          <div className="relative z-10 flex h-full flex-col justify-start gap-6 p-5 text-white sm:p-6 lg:gap-8 lg:p-10">
            <div className="flex items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-8 lg:items-start lg:gap-10">
              <div className="space-y-6 lg:space-y-5">
                <div>
                  <p className="text-primary mt-2 text-base font-semibold whitespace-nowrap sm:text-lg lg:text-xl">
                    Olá, quem sou
                  </p>
                  <h2 className="text-2xl leading-none font-semibold whitespace-nowrap sm:text-3xl lg:text-4xl text-title">
                    Elivelton Ferreira
                  </h2>

                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 whitespace-nowrap sm:text-xs sm:tracking-[0.24em]">
                    <span className="mt-1 block text-text">
                      FullStack & Mobile Developer
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-white/90 sm:gap-8">
                  <div>
                    <p className="text-3xl text-title font-light leading-none sm:text-4xl">
                      +5
                    </p>
                    <p className="text-[10px] text-text uppercase tracking-[0.16em]  sm:text-xs sm:tracking-[0.2em]">
                      Anos de experiência
                    </p>
                  </div>
                </div>
              </div>

              <Image
                src="./profile.jpg"
                alt="logo"
                width={600}
                height={854}
                quality={100}
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 200px"
                className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-32 sm:w-32 lg:h-[260px] lg:w-[200px]"
              />
            </div>

            <p className="mt-2 text-sm leading-7 text-text lg:leading-8 lg:tracking-normal lg:w-[70%]">
              Sou uma pessoa movida por curiosidade, aprendizado e propósito. A
              tecnologia entrou na minha vida cedo e, desde então, encontrei na
              resolução de problemas e na construção de soluções uma forma de
              gerar impacto. Valorizo o crescimento contínuo, a colaboração e o
              compartilhamento de conhecimento, buscando evoluir não apenas como
              engenheiro de software, mas também como pessoa e como
              profissional.
            </p>

            <SocialLinks
              gitHub="https://github.com/eliveltonsf"
              instagram="https://www.instagram.com/eliveltonsf.dev/"
              linkedin="https://www.linkedin.com/in/eliveltonsf/"
              curriculum="https://drive.google.com/file/d/1rNx7RQRi2ksdhtTTkNme-i4aftryyD1p/view?usp=drive_link"
            />
          </div>
        </div>
      </section>

      <aside
        ref={asideRef}
        className="flex w-full flex-col items-start justify-start gap-3 overflow-visible p-4
        sm:p-6 lg:w-[50%] lg:self-start lg:max-h-screen lg:overflow-x-hidden lg:overflow-y-auto lg:scroll-smooth lg:style-scrollbar-h lg:p-20 lg:pl-0 2xl:ml-20"
      >
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
                metrics={item.metrics}
                linkedin={item.linkedin}
                instagram={item.instagram}
                site={item.site}
                enterprise={item.enterprise}
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
