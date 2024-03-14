"use client";

import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export default function GloboTech() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      id="inicial"
      className="hidden h-auto lg:flex lg:flex-col lg:items-center lg:text-primary lg:font-bold justify-center"
    >
      {loading ? (
        <Skeleton className="h-[32rem] rounded-full w-[32rem] ml-12 lg:ml-16" />
      ) : (
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(630, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
          })}
          className="text-sm font-semibold"
        >
          {[
            "HTML5",
            "CSS",
            "React",
            "Vue",
            "Next",
            "React Native",
            "Figma",
            "Sass",
            "Tailwind",
            "Styled-components",
            "UX e UI",
            "Javascript",
            "Typescript",
            "Docker",
            "Storybook",
            "Design System",
            "Kubernetes",
            "Node",
            "Python",
            "Git",
            "GitHub",
            "Vtex IO",
            "Vtex CMS",
            "JQuery",
            "API Rest",
            "Jest",
          ]}
        </TagCloud>
      )}
    </div>
  );
}
