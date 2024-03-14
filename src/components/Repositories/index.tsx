"use client";

import { getReposData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

import { motion } from "framer-motion";
import MyCard from "../MyCard";
import { Skeleton } from "../ui/skeleton";

const MotionCard = motion(MyCard, { forwardMotionProps: true });

export default function Repositories() {
  const { data, isLoading } = useQuery({
    initialData: [{ id: 0, name: "" }],
    queryFn: getReposData,
    queryKey: ["reposData"],
  });

  return (
    <div className="lg:flex lg:w-full lg:justify-between lg:flex-wrap">
      {!isLoading ? (
        data?.map(
          (repo: any, index: number) =>
            repo.stargazers_count > 0 && (
              <MotionCard
                key={index}
                title="Project"
                name={repo.name.replace(/-/g, " ")}
                description={repo.description}
                link={repo.html_url}
                whileHover={{
                  scale: 1.07,
                  transition: { duration: 0.4 },
                }}
              />
            )
        )
      ) : (
        <div className="flex flex-col">
          <Skeleton className="h-52 rounded-lg mb-4" />
          <Skeleton className="h-48 rounded-lg mb-4" />
          <Skeleton className="h-48 rounded-lg mb-4" />
          <Skeleton className="h-48 rounded-lg mb-4" />
        </div>
      )}
    </div>
  );
}
