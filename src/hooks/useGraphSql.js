import { useQuery } from "react-query";
import axios from "axios";

export function useGraphSql(query,nameMutationQuery) {
  const { data, isLoading, isError } = useQuery(nameMutationQuery, async () => {
    const response = await axios.post(
      "https://logical-calf-89.hasura.app/v1/graphql",
      {
        query,
      }
    );
    return response.data.data;
  },{
  refetchOnWindowFocus: false,}
);
  return { data, isLoading, isError };
}

