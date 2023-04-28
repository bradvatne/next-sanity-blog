import Image from "next/image";
import { getProjects } from "../sanity/sanity-utils";
import { Project } from "../types/Project";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Brad!
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Hey everyone! Check out my projects!
      </p>
      <div className="">
        <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              className="border-gray-500 border rounded-lg p-3 hover:scale-105 hover:border-indigo-500 transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={350}
                  height={150}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
