import { QueryClient, QueryClientProvider } from "react-query";
import { GetPost } from "./GetPost";

const queryClient = new QueryClient();

const ConfigRQ = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GetPost />
    </QueryClientProvider>
  );
};

export { ConfigRQ };
