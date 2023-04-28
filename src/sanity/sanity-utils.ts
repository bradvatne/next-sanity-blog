import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import client from "./client/sanity-client";

export async function getProjects(): Promise<Project[]> {
  return createClient({
    projectId: "79ziqubq",
    dataset: "production",
    apiVersion: "2023-04-28",
  }).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient({
    projectId: "79ziqubq",
    dataset: "production",
    apiVersion: "2023-04-28",
  }).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
