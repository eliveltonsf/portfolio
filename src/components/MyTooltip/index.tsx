import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { ReactNode } from "react";

type MyTooltipProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  description: string;
};

export default function MyTooltip({
  children,
  description,
  ...rest
}: MyTooltipProps) {
  return (
    <TooltipProvider {...rest}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="bg-card border-none">
          <p className="text-primary font-semibold">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
