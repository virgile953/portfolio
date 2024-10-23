// app/projects/[id]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Button from '../../components/Button';

interface ProjectData {
	title: string;
	description: string;
	overview: string;
	key_features: string[];
	technologies_used: string[];
	impact: string;
}

export default function ProjectDetail() {
	const id = usePathname().split("/").at(-1);
	const [projectData, setProjectData] = useState<ProjectData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProjectData = async () => {
			if (!id) return;
			try {
				const response = await fetch('/api/projectdata', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ id }),
				});

				if (!response.ok) {
					throw new Error('Failed to fetch project data');
				}
				const data = await response.json();
				setProjectData(data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('An unknown error occurred');
				}
			} finally {
				setLoading(false);
			}
		};
		fetchProjectData();
	}, [id]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6">
		<header className="text-center mb-12">
		<h1 className="text-5xl font-extrabold">{projectData?.title}</h1>
		<p className="text-xl mt-4">
		{projectData?.description}
		</p>
		</header>
		<section className="max-w-2xl w-full mb-12">
		<h2 className="text-4xl font-bold">Project Overview</h2>
		<p className="mt-2">{projectData?.overview}</p>

		<h3 className="text-3xl font-bold mt-6">Key Features</h3>
		<ul className="list-disc list-inside mt-2">
		{projectData?.key_features.map((feature, index) => (
			<li key={index}>{feature}</li>
		))}
		</ul>

		<h3 className="text-3xl font-bold mt-6">Technologies Used</h3>
		<p className="mt-2">The software was developed using the following technologies:</p>
		<ul className="list-disc list-inside mt-2">
		{projectData?.technologies_used.map((tech, index) => (
			<li key={index}>{tech}</li>
		))}
		</ul>

		<h3 className="text-3xl font-bold mt-6">Impact</h3>
		<p className="mt-2">{projectData?.impact}</p>
		<Button href='/projects'>Back to Projects</Button>
		</section>
		</div>
	);
}
