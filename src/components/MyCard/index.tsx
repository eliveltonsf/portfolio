/* eslint-disable react/display-name */
"use client";

import Link from "next/link";
import { Ref, forwardRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { FaInstagram, FaLink, FaLinkedinIn } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: "Project" | "Experience";
  name: string;
  description: string;
  date?: string;
  link: string;
  linkedin?: string;
  instagram?: string;
  site?: string;
  className?: string;
  enterprise?: string;
};

const MyCard = forwardRef(
  (
    {
      title,
      name,
      description,
      date,
      link,
      linkedin,
      instagram,
      site,
      enterprise,
      className,
      ...rest
    }: CardProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [listDescription, setListDescription] = useState(() => {
      const list = description.split(".");
      return list;
    });
    return (
      <Card
        className={twMerge(
          `${
            title === "Experience" && "border-none"
          } mb-4 sm:p-4 bg-cover bg-no-repeat bg-card
        ${
          title === "Project" &&
          "lg:hover:border-2 lg:hover:border-primary lg:transition lg:ease-in-out lg:delay-150 lg:duration-500 lg:hover:scale-105"
        } relative`,
          className
        )}
        ref={ref}
        {...rest}
      >
        <CardHeader className="pb-2">
          <CardTitle className=" text-[0.7rem] text-primary uppercase tracking-widest h-auto">
            {date ? (
              <div className="flex flex-col justify-between h-auto pb-4 sm:relative ">
                <div>
                  {title}

                  <span className="block text-sm text-gray-400 font-extralight text-text lowercase">
                    {date}
                  </span>

                  <div className="flex gap-3 justify-start text-gray-400  my-3">
                    {enterprise && (
                      <span className="text-[0.89rem]">{enterprise}</span>
                    )}
                    {linkedin && (
                      <Link href={linkedin} target="_blank">
                        <FaLinkedinIn
                          size={18}
                          className="hover:text-primary"
                        />
                      </Link>
                    )}
                    {instagram && (
                      <Link href={instagram} target="_blank">
                        <FaInstagram size={18} className="hover:text-primary" />
                      </Link>
                    )}
                    {site && (
                      <Link href={site} target="_blank">
                        <FaLink size={18} className="hover:text-primary" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              title
            )}
          </CardTitle>
          <CardDescription className="text-xl text-title uppercase">
            {name.replace(/-/g, " ")}
          </CardDescription>
        </CardHeader>
        <CardContent
          className={`text-sm text-gray-400 text-text  ${
            title !== "Experience" && "line-clamp-5"
          } mb-3`}
        >
          {title !== "Experience"
            ? description
            : listDescription.map((item, index) => (
                <p key={index} className="my-4">
                  {item}
                </p>
              ))}
        </CardContent>
        {title === "Project" && (
          <CardFooter className="mb-4">
            <div className="flex w-[100%] h-full justify-evenly items-end absolute top-0 left-0 bottom-0 right-0 rounded-sm z-50 ">
              <Link
                href={link}
                className="flex items-center justify-center w-[50%]  h-8 rounded-bl-lg cursor-pointer pb-6"
                target="_blank"
              >
                <GitHubLogoIcon className="h-[1.5rem] w-[1.5rem] text-white hover:text-primary " />
              </Link>
              {site && (
                <Link
                  href={site}
                  className="flex items-center justify-center w-[50%]  h-8 rounded-bl-lg cursor-pointer pb-6"
                  target="_blank"
                >
                  <Link2Icon className="h-[1.5rem] w-[1.5rem] text-white hover:text-primary" />
                </Link>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    );
  }
);
export default MyCard;
