import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Static hosts (GitHub Pages) serve each page as <page>/index.html at "/page/".
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
