import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  name: string;
  description: string;
  logo?: string;
  date?: string;
};

export default function MyCard({
  title,
  name,
  description,
  logo,
  date,
  ...rest
}: CardProps) {
  return (
    <Card
      className={`border-none mb-4 p-10 ${
        logo && logo
      } bg-cover bg-no-repeat  bg-card`}
      {...rest}
    >
      <CardHeader className="pb-2">
        <CardTitle className=" text-[0.7rem] text-primary uppercase tracking-widest h-auto">
          {date ? (
            <div className="flex justify-between h-auto pb-4">
              <div>
                {title}

                <span className="block text-sm text-gray-400 font-extralight text-text lowercase">
                  {date}
                </span>
              </div>
              {logo && (
                <picture>
                  <img className=" w-32 h-30" src={logo} alt="logo" />
                </picture>
              )}
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
        {description}
      </CardContent>
    </Card>
  );
}
