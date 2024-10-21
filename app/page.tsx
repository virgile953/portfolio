"use client"; // Mark this component as a client component

import Link from 'next/link';
import { projects } from './projectsData'; // Import the projects data
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6"> {/* Dark mode styles */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">Welcome to My Portfolio</h1> {/* Updated text color */}
        <p className="text-xl mt-4">I&apos;m Virgile, a developer with <em>some</em> experience in creating innovative solutions.</p>
      </header>

      {/* Render the Navbar */}
      <Navbar />

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-3xl font-bold"><b>Recent Projects</b></h2> {/* Updated text color */}
        <p className="mt-2">Here are some of the projects I&apos;ve worked on:</p>
        {projects.slice(0, 3).map((project, index) => (  // Use slice to get the first 3 projects
          <div key={index} className="bg-gray-800 shadow-md rounded-lg p-6 mb-6"> {/* Updated background color */}
            <h3 className="text-2xl font-bold">{project.title}</h3> {/* Updated text color */}
            <p className="mt-2">{project.description}</p>
            <Link href={project.link} className="text-blue-500 hover:text-blue-300 transition duration-300 mt-4 inline-block"> {/* Updated hover color */}
              View Project
            </Link>
          </div>
        ))}

      </section>
    </div>
  );
}
