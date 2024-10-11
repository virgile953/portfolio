"use client"; // Mark this component as a client component

import Link from 'next/link';
import { projects } from '../projectsData'; // Import the projects data
import Navbar from '../Navbar'; // Import the Navbar component

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600">My Projects</h1>
        <p className="text-xl mt-4 text-gray-700">Here are some of the projects I&apos;ve worked on.</p>
      </header>
    <Navbar />
	  <section className="max-w-2xl w-full mb-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
              <Link href={project.link}>
                {project.title}
              </Link>
            </h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
