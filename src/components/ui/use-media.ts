import { fetchMediaByExactTitle } from "@/graphql/lib/query";
import { useQuery } from "@tanstack/react-query";

export const useMediaByExactTitle = (title, limit = 10) => {
  return useQuery({
    queryKey: ["mediaItem", title], // Unique key for caching
    queryFn: () => fetchMediaByExactTitle(title, limit), // Function to fetch data
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
