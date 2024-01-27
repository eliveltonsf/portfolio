"use client";

import { useQuery } from "@tanstack/react-query";
import { getReposData } from "@/services/api";

import MyCard from "../MyCard";
import { Skeleton } from "../ui/skeleton";

export default function Repositories() {
  const { data, isLoading } = useQuery({
    initialData: [{ id: 0, name: "" }],
    queryFn: getReposData,
    queryKey: ["reposData"],
  });

  return (
    <>
      {!isLoading ? (
        data?.map(
          (repo: any, index: number) =>
            repo.stargazers_count > 0 && (
              <MyCard
                key={index}
                title="Project"
                name={repo.name.replace(/-/g, " ")}
                description={repo.description}
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
    </>
  );
}
