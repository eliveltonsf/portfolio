"use client";
import { useState } from "react";

import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

import { BiLogoFigma } from "react-icons/bi";
import { GiJesterHat } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs, TbError404Off } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaNode,
  FaDocker,
  FaPython,
} from "react-icons/fa6";
import {
  SiCypress,
  SiKubernetes,
  SiRadixui,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVtex,
} from "react-icons/si";

type StackDataProps = DynamicIconProps & {
  iconName: string;
  description: string;
  study: boolean;
};

interface DynamicIconProps {
  iconName: string;
}

interface CardProps {
  data: StackDataProps[];
}

export default function Stacks({ data, ...rest }: CardProps) {
  const [selectStack, setSelectStack] = useState({
    iconName: "",
    description: "Clique ou passe o mouse sobre a stack.",
  });

  const DynamicIcon = ({ iconName }: DynamicIconProps) => {
    let iconComponent: React.ReactNode;

    switch (iconName) {
      case "html":
        iconComponent = <FaHtml5 size={50} />;
        break;
      case "css":
        iconComponent = <FaCss3 size={50} />;
        break;
      case "js":
        iconComponent = <IoLogoJavascript size={50} />;
        break;
      case "react":
        iconComponent = <FaReact size={50} />;
        break;
      case "next":
        iconComponent = <TbBrandNextjs size={50} />;
        break;
      case "typescript":
        iconComponent = <SiTypescript size={50} />;
        break;
      case "radix":
        iconComponent = <SiRadixui size={50} />;
        break;
      case "sass":
        iconComponent = <FaSass size={50} />;
        break;
      case "styled":
        iconComponent = <SiStyledcomponents size={50} />;
        break;
      case "tailwind":
        iconComponent = <SiTailwindcss size={50} />;
        break;
      case "figma":
        iconComponent = <BiLogoFigma size={50} />;
        break;
      case "storybook":
        iconComponent = <SiStorybook size={50} />;
        break;
      case "node":
        iconComponent = <FaNode size={50} />;
        break;
      case "jest":
        iconComponent = <GiJesterHat size={50} />;
        break;
      case "vtex":
        iconComponent = <SiVtex size={50} />;
        break;
      case "docker":
        iconComponent = <FaDocker size={50} />;
        break;
      case "kubernetes":
        iconComponent = <SiKubernetes size={50} />;
        break;
      case "python":
        iconComponent = <FaPython size={50} />;
        break;
      case "cypress":
        iconComponent = <SiCypress size={50} />;
        break;
      default:
        iconComponent = <TbError404Off size={50} />;
    }

    return iconComponent;
  };

  return (
    <div className="flex flex-col justify-start gap-6" {...rest}>
      <aside className="mt-4 min-h-32">
        <h2
          className="text-lg font-semibold text-title before:content-['Conhecimento']
        lg:before:content-['Stack']"
        >
          <div className="w-[3px] h-[3px] bg-primary inline-block" />
        </h2>
        <p className="text-sm text-gray-400 text-text">
          {selectStack.description}
        </p>
      </aside>
      <div
        className="flex gap-2 w-full overflow-x-scroll style-scrollbar
        lg:overflow-hidden lg:w-full lg:flex-wrap lg:gap-4"
      >
        {data ? (
          data.map((stack, index) => (
            <Card
              key={index}
              className={`box-border flex justify-center items-center w-20 h-20 border-none mb-4 relative ${
                selectStack.iconName === stack.iconName &&
                "border border-solid border-2 border-primary"
              }
              lg:mb-0`}
              onMouseOverCapture={() =>
                setSelectStack({
                  iconName: stack.iconName,
                  description: stack.description,
                })
              }
            >
              <CardContent
                className={`flex justify-center items-center content-center text-primary p-[1.5rem]`}
              >
                <DynamicIcon iconName={stack.iconName} />
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="flex flex-col">
            <Skeleton className="h-20 w-20 rounded-lg mb-4" />
            <Skeleton className="h-20 w-20 rounded-lg mb-4" />
            <Skeleton className="h-20 w-20 rounded-lg mb-4" />
            <Skeleton className="h-20 w-20 rounded-lg mb-4" />
            <Skeleton className="h-20 w-20 rounded-lg mb-4" />
            <Skeleton className="h-20 w-20 rounded-lg mb-4" />
          </div>
        )}
      </div>
    </div>
  );
}
