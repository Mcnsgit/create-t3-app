
import {z} from 'zod'

import { createTRPCRouter, publicProcedure } from '/server/api/trpc';

export const posts = createTRPCRouter ({
        getAll: publicProcedure.query(({ctx}) => {
        return {
            posts: ctx.prisma.post.findMany()};
    }),
        
    })
