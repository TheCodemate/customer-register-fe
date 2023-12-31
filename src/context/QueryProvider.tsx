import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";

type Props = {
  children: ReactElement | ReactElement[];
};

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
