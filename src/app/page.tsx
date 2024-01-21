"use client";

import ModeToggle from "@/components/ModeToggle";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import MyCard from "@/components/MyCard";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <ModeToggle />

      <section className="flex flex-col gap-3 pb-16">
        <Image src="./profile.png" alt="logo" width={160} height={160} />

        <h1 className="font-bold text-[2.7rem] text-primary bg-clip-text py-4">
          Hi, I'm Elivelton Ferreira.
        </h1>

        <p className="text-sm  leading-7 text-text">
          What motivates me is the incessant search for challenges that allow me
          to continually learn and grow. I love collaborating on innovative
          teams and working on projects that make us better with each line of
          code. My goal is to continue improving my React skills and develop web
          and mobile solutions that offer an exceptional user experience.
        </p>

        <div className="flex justify-start mt-6">
          <ul className="flex justify-between gap-7 text-sm">
            <li>GitHub</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Curriculum</li>
          </ul>
        </div>
      </section>

      <aside className="flex flex-col justify-start items-start gap-3 w-full">
        <div className="flex flex-col w-full">
          <h3 className="flex w-auto uppercase pb-4 tracking-widest text-sm font-semibold">
            Project
          </h3>

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
        </div>

        <div className="flex flex-col w-full">
          <h3 className="flex w-auto uppercase pb-4 tracking-widest text-sm font-semibold">
            Experience
          </h3>

          <MyCard
            title="Experience"
            logo="./logoExperience/mobs2.png"
            date="set de 2020 - mai de 2021 · 9 meses"
            name="Frontend Web Developer JR"
            description="Contribuir na equipe de suporte e inovação a aplicativos e sites internos e projetos.
            Para criar telas íntegras e fiéis ao que foi solicitado,
            mantendo uma usabilidade que facilite a melhor integração ao usuário final, construí telas para aplicativos de validação de dados com APIs externas de segurança para confirmação se o hardware usado é valido para uso do aplicativo. Também fazia parte da equipe de briefing para levantamentos de requisitos de novos projetos.
            Participei da criação do Frontend de dois projetos de imobiliária, criando um Dashboard
            e um Marketplace."
          />
        </div>

        <h3 className="flex w-auto uppercase pb-4 tracking-widest text-sm font-semibold">
          Stack
        </h3>
      </aside>
    </main>
  );
}
