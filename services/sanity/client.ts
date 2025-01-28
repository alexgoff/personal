import { createClient } from "next-sanity";
import { env } from "@/env.mjs";

export const client = createClient({
  projectId: env.SANITY_API_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
