import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Default configuration for all queries
      refetchOnWindowFocus: true,
    },
  },
});
