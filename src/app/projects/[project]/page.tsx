import { getProject } from "@/sanity/sanity-utils";
import React from "react";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center ">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:text-indigo-500 transition"
        >
          View Project
        </a>
      </header>
      <div
        className="text-4xl text-extrabold text-black"
      >
        <PortableText value={project.content} />
      </div>
    </div>
  );
};

export default Project;
