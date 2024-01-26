import Link from "next/link";
import { ReactNode } from "react";

type ContainerAsideProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  title: string;
};

export default function ContainerAside({
  children,
  title,
  ...rest
}: ContainerAsideProps) {
  return (
    <div className="flex flex-col w-full">
      <h3
        className="flex w-auto uppercase pb-4 tracking-widest text-sm font-semibold
      lg:hidden"
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
