import { z } from "zod";

import { postRouter } from "import/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "import/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import { t } from '../trpc';
import { z } from 'zod';
export const postRouter = t.router({
  create: t.procedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .mutation(({ input }) => {
                  
(parameter) input: {
    title: string;
}
      // [...]
    }),
  list: t.procedure.query(() => {
    // ...
    return [];
  }),
});
 
/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
