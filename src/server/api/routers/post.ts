import { z } from "zod";
import { PrismaClient } from "import/server/db";
import { createTRPCRouter, publicProcedure } from "import/server/api/trpc";

const prisma = new PrismaClient();
export const postRouter = createTRPCRouter({
  hello: publicProcedure
  .input(z.object({ text: z.string() }))
  .query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return  ctx.prisma.post.findMany()
    })
  
  // create: publicProcedure
    // .input(z.object({ name: z.string().min(1) }))
    // .mutation(async ({ ctx, input }) => {
    //   // simulate a slow db call
    //   await new Promise((resolve) => setTimeout(resolve, 1000));

    //   return ctx.db.post.create({
    //     data: {
    //       name: input.name,
    //     },
    //   });
    // }),

//   getLatest: publicProcedure.query(({ ctx }) => {
//     return ctx.db.post.findFirst({
//       orderBy: { createdAt: "desc" },
//     });
//   }),
// });
