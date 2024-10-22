"use client"; // Mark this component as a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Import the Navbar component

type Project = {
  id: number; // Adjust this type based on your actual table structure
  title: string;
  description: string;
  link: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]); // Initialize state for projects

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProjects(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects(); // Call the function to fetch projects
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">My Projects</h1>
        <p className="text-xl mt-4">Here are some of the projects I&apos;ve worked on.</p>
      </header>
      <Navbar />
      <section className="max-w-2xl w-full mb-12">
        {projects.map((project, index) => (
          <div key={index} className="divblock mb-6">
            <h3 className="biglink">
              <Link href={`/projects/${project.id}`}>{project.title}</Link>
            </h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
