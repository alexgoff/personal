// @ts-check // tells TS to type check this file as well, despite it is a JS file

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  server: { SANITY_API_PROJECT_ID: z.string() },
  client: {},
  experimental__runtimeEnv: { NODE_ENV: process.env.NODE_ENV },
  emptyStringAsUndefined: true,
  skipValidation: process.env.npm_lifecycle_event === "lint",
});
