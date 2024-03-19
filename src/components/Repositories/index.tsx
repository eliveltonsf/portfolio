"use client";

import { PROJECTS_INFO } from "@/constants/projects";
import MyCard from "../MyCard";

export default function Repositories() {
  return (
    <div className="lg:flex lg:w-full lg:justify-between lg:flex-wrap gap-4">
      {PROJECTS_INFO.map(
        (project: any, index: number) => (
          <MyCard
            key={index}
            title="Project"
            name={project.name.replace(/-/g, " ")}
            description={project.description}
            link={project.github}
            site={project.link}
            className="flex flex-col xl:w-[48%]"
          />
        )
        // </Link>
        // )
      )}
    </div>
  );
}
