import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import MyTooltip from "../MyTooltip";

type AnchorProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  tooltip: string;
  children: ReactNode;
  className: string;
};

export default function Anchor({
  id,
  tooltip,
  children,
  className,
  ...rest
}: AnchorProps) {
  return (
    <div
      className={twMerge(
        `hidden 
         hover:box-border hover:border-solid hover:border-2 hover:border-primary
         lg:flex lg:justify-center lg:items-center lg:w-auto lg:h-auto lg:bg-card lg:absolute lg:right-8 lg:p-[0.527rem] lg:rounded-md
         lg:border-2 lg:border-transparent`,
        className
      )}
      {...rest}
    >
      <MyTooltip description={tooltip}>
        <a href={`#${id}`}>{children}</a>
      </MyTooltip>
    </div>
  );
}
