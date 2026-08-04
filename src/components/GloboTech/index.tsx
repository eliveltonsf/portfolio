"use client";

import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useEffect, useState } from "react";

type GloboTechProps = {
  asWatermark?: boolean;
};

export default function GloboTech({ asWatermark = false }: GloboTechProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (asWatermark) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [asWatermark]);

  const wrapperClassName = asWatermark
    ? "pointer-events-none fixed inset-0 -z-10 flex items-center justify-center opacity-[0.08]"
    : "hidden h-auto justify-center lg:flex lg:flex-col lg:items-center lg:text-primary lg:font-bold";

  const cloudClassName = asWatermark
    ? "text-[11px] font-semibold text-primary"
    : "text-sm font-semibold";

  return (
    <div id="inicial" className={wrapperClassName}>
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: asWatermark
            ? Math.max(w.innerWidth, w.innerHeight) * 0.62
            : Math.min(630, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
        })}
        className={cloudClassName}
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
    </div>
  );
}
