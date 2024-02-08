"use client";

import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type ContainerAsideProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  children: ReactNode;
  title: string;
};

export default function ContainerAside({
  id,
  children,
  title,
  ...rest
}: ContainerAsideProps) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };
  }, [id, controls]);

  return (
    <motion.div
      id={id}
      animate={controls}
      transition={{ duration: 0.8 }}
      className={`flex flex-col w-full ${title === "project" && "flex-wrap"}`}
    >
      <h3
        className="flex w-auto uppercase pb-4 tracking-widest text-sm font-semibold
      lg:hidden"
      >
        {title}
      </h3>
      {children}
    </motion.div>
  );
}
