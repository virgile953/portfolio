"use client"; // Mark this component as a client component

import Link from 'next/link';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

type Project = {
	id: number; // Adjust this type based on your actual table structure
	title: string;
	description: string;
	link: string;
};

export default function Home() {
	const [projects, setProjects] = useState<Project[]>([]); // Initialize state to store projects
	useEffect(() => {
		// Fetch project data from the API
		const fetchProjects = async () => {
			try {
				const response = await fetch('/api/projects'); // Call the API route
				const data = await response.json();
				setProjects(data); // Set the fetched data to state
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6"> {/* Dark mode styles */}
		<header className="text-center mb-12">
		<h1 className="text-5xl font-extrabold">Welcome to My Portfolio</h1> {/* Updated text color */}
		<p className="text-xl mt-4">I&apos;m Virgile, a developer with <em>some</em> experience in creating innovative solutions.</p>
		</header>

		{/* Render the Navbar */}
		<Navbar />

		<section className="max-w-2xl w-full mb-12">
		<h2 className="text-3xl font-bold"><b>Recent Projects</b></h2> {/* Updated text color */}
		<p className="mt-2">Here are some of the projects I&apos;ve worked on:</p>
		{projects.slice(0, 3).map((project) => (  // Use slice to get the first 3 projects
			<div key={project.id} className="divblock mb-6">
			<h3 className="text-2xl font-bold">{project.title}</h3>
			<p className="mt-2">{project.description}</p>
			<Link href={`/projects/${project.id}`} className="mt-4 inline-block">
			{/* ${project.id}`}>{project.title} */}
			View Project
			</Link>
			</div>
		))}

		</section>
		</div>
	);
}
