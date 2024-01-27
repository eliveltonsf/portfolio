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
      className={`border-none mb-4 sm:p-4 ${
        logo && logo
      } bg-cover bg-no-repeat bg-card`}
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
              </div>
              {logo && (
                <picture className="mt-6 sm:absolute sm:right-0 sm:-top-6">
                  <img
                    className="w-32 h-30 sm:w-28 sm:h-18"
                    src={logo}
                    alt="logo"
                  />
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
