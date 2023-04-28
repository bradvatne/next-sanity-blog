import { createClient } from "next-sanity";

const client = createClient({
  projectId: "79ziqubq",
  dataset: "production",
  apiVersion: "2023-04-28",
});


export default client;