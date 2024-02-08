/* eslint-disable react/display-name */
"use client";

import { useState, forwardRef, Ref } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

import { FaLinkedinIn, FaInstagram, FaLink } from "react-icons/fa";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  name: string;
  description: string;
  logo?: string;
  date?: string;
  link: string;
  linkedin?: string;
  instagram?: string;
  site?: string;
};

const MyCard = forwardRef(
  (
    {
      title,
      name,
      description,
      logo,
      date,
      link,
      linkedin,
      instagram,
      site,
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
        className={`border-none mb-4 sm:p-4 ${
          logo && logo
        } bg-cover bg-no-repeat bg-card
        ${title === "Project" && "xl:w-[48%] lg:hover:bg-gray-800"}`}
        ref={ref}
        {...rest}
      >
        <Link
          href={link}
          className={`  ${title === "Experience" && "cursor-default"}`}
          target="_blank"
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
                          <FaInstagram
                            size={18}
                            className="hover:text-primary"
                          />
                        </Link>
                      )}
                      {site && (
                        <Link href={site} target="_blank">
                          <FaLink size={18} className="hover:text-primary" />
                        </Link>
                      )}
                    </div>

                    {logo && (
                      <picture className="mt-6 lg:absolute lg:right-0 lg:-top-6">
                        <img
                          className="w-32 h-30 lg:w-28 lg:h-18"
                          src={logo}
                          alt="logo"
                        />
                      </picture>
                    )}
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
          <CardContent className="text-sm text-gray-400 text-text">
            {title !== "Experience"
              ? description
              : listDescription.map((item, index) => (
                  <p key={index} className="my-4">
                    {item}
                  </p>
                ))}
          </CardContent>
        </Link>
      </Card>
    );
  }
);
export default MyCard;
