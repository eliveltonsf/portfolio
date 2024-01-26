"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import MyCard from "@/components/MyCard";
import SocialLinks from "@/components/SocialLinks";
import ContainerAside from "@/components/ContainerAside";
import ModeToggle from "@/components/ModeToggle";
import Stacks from "@/components/Stacks";
import { Skeleton } from "@/components/ui/skeleton";
import { EXPERIENCES_INFO } from "@/constants/experiences";
import { STACKS_INFO } from "@/constants/stacks";

export default function Home() {
  const [repos, setRepos] = useState<any[]>();
  const getProfileData = async () => {
    const response = await axios.get(
      "https://api.github.com/users/eliveltonsf/repos"
    );
    setRepos(response.data);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between 
    lg:flex-row lg:overflow-hidden"
    >
      <ModeToggle />

      <section
        className="flex flex-col gap-3 p-8 pb-16 
      lg:w-[50%] lg:h-lvh lg:content-start lg:justify-between lg:p-20 lg:pr-0 "
      >
        <Image src="./profile.png" alt="logo" width={160} height={160} />

        <h1
          className="font-bold text-[2.7rem] text-primary bg-clip-text
        lg:text-[3.7rem] lg:w-[60%]"
        >
          Hi, I'm Elivelton Ferreira.
        </h1>

        <p
          className="text-sm  leading-7 text-text
        lg:text-lg lg:w-[60%] lg:tracking-normal lg:leading-9"
        >
          What motivates me is the incessant search for challenges that allow me
          to continually learn and grow. I love collaborating on innovative
          teams and working on projects that make us better with each line of
          code. My goal is to continue improving my React skills and develop web
          and mobile solutions that offer an exceptional user experience.
        </p>

        <SocialLinks
          gitHub="https://github.com/eliveltonsf"
          instagram="https://www.instagram.com/eliveltonsf.dev/"
          linkedin="https://www.linkedin.com/in/eliveltonsf/"
          curriculum="https://drive.google.com/file/d/1zRromvWgGaWXtJtp5Mp_JUTPOopkvMNk/view?usp=sharing"
        />
      </section>

      <aside
        className="flex flex-col justify-start items-start gap-3 w-full p-8
        lg:w-[50%] lg:h-lvh overflow-y-scroll lg:p-20 lg:pl-0 lg:pr-24"
      >
        <ContainerAside title="Project">
          {repos ? (
            repos?.map(
              (repo: any, index: number) =>
                repo.stargazers_count > 0 && (
                  <MyCard
                    key={index}
                    title="Project"
                    name={repo.name.replace(/-/g, " ")}
                    description={repo.description}
                  />
                )
            )
          ) : (
            <div className="flex flex-col">
              <Skeleton className="h-52 rounded-lg mb-4" />
              <Skeleton className="h-48 rounded-lg mb-4" />
              <Skeleton className="h-48 rounded-lg mb-4" />
              <Skeleton className="h-48 rounded-lg mb-4" />
            </div>
          )}
        </ContainerAside>

        <ContainerAside title="Experience">
          {EXPERIENCES_INFO ? (
            EXPERIENCES_INFO.map((item, index) => (
              <MyCard
                key={index}
                title="Experience"
                logo={item.logoPath}
                date={item.period}
                name={item.name}
                description={item.description}
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

        <ContainerAside title="Stack">
          <Stacks data={STACKS_INFO} />
        </ContainerAside>
      </aside>
    </main>
  );
}
