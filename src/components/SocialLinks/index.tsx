import Link from "next/link";

type SocialLinksProps = React.HTMLAttributes<HTMLDivElement> & {
  gitHub: string;
  instagram: string;
  linkedin: string;
  curriculum: string;
};

export default function SocialLinks({
  gitHub,
  instagram,
  linkedin,
  curriculum,
  ...rest
}: SocialLinksProps) {
  return (
    <div className="flex justify-start mt-6" {...rest}>
      <ul className="flex justify-between gap-7 text-sm">
        <li>
          <Link href={gitHub} target="_blank">
            {" "}
            GitHub
          </Link>
        </li>
        <li>
          <Link href={instagram} target="_blank">
            Instagram
          </Link>
        </li>
        <li>
          <Link href={linkedin} target="_blank">
            Linkedin
          </Link>
        </li>
        <li>
          <Link href={curriculum}>Currículo</Link>
        </li>
      </ul>
    </div>
  );
}
