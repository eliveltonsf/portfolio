import { StackInfo } from "@/constants/stacks";

const CATEGORY_LABELS: Record<StackInfo["category"], string> = {
  front: "Front",
  back: "Back",
  mobile: "Mobile",
  infra: "Infra",
};

const CATEGORY_ORDER: StackInfo["category"][] = [
  "front",
  "back",
  "mobile",
  "infra",
];

const StacksBlock = ({ data }: { data: StackInfo[] }) => {
  const getTechLabel = (iconName: string) =>
    iconName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <div className="space-y-4 w-full">
      {CATEGORY_ORDER.map((category) => {
        const stacksByCategory = data.filter(
          (stack) => stack.category === category,
        );

        if (stacksByCategory.length === 0) {
          return null;
        }

        return (
          <div key={category}>
            <span className="text-[0.7rem] text-primary uppercase tracking-widest block mb-1">
              {CATEGORY_LABELS[category]}
            </span>
            <hr className="border-border mb-2" />
            <p className="text-xs text-text leading-6">
              {stacksByCategory
                .map((stack) => getTechLabel(stack.iconName))
                .join(" • ")}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StacksBlock;
