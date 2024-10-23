"use client";

import Link from 'next/link';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

type Project = {
	id: number;
	title: string;
	description: string;
	link: string;
};

export default function Home() {
	const [projects, setProjects] = useState<Project[]>([]);
	useEffect(() => {

		const fetchProjects = async () => {
			try {
				const response = await fetch('/api/projects');
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6">
		<header className="text-center mb-12">
		<h1 className="text-5xl font-extrabold">Welcome to My Portfolio</h1>
		<p className="text-xl mt-4">I&apos;m Virgile, a developer with <em>some</em> experience in creating innovative solutions.</p>
		</header>
		<Navbar />
		<section className="max-w-2xl w-full mb-12">
		<h2 className="text-3xl font-bold"><b>Recent Projects</b></h2>
		<p className="mt-2">Here are some of the projects I&apos;ve worked on:</p>
		{projects.slice(0, 3).map((project) => (
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
