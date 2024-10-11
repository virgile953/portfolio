// projects/sas-application-redesign.tsx
"use client"; // Mark this component as a client component

import Link from 'next/link';

export default function SASApplicationRedesign() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600">SAS Application Redesign</h1>
        <p className="text-xl mt-4 text-gray-700">
          A comprehensive overhaul of the SAS application to improve usability and performance.
        </p>
      </header>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-4xl font-bold text-blue-600">Project Overview</h2>
        <p className="text-gray-700 mt-2">
          This project focused on redesigning the SAS application to enhance its functionality, user experience, and overall performance. The goal was to create a more intuitive interface and streamline processes for end users.
        </p>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Key Features</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Revamped user interface for improved navigation</li>
          <li>Enhanced data visualization capabilities</li>
          <li>Integration of advanced analytics features</li>
          <li>Performance optimizations for faster processing times</li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Technologies Used</h3>
        <p className="text-gray-700 mt-2">
          The redesign was developed using the following technologies:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Python for backend logic</li>
          <li>React for the frontend interface</li>
          <li>SQL for data management</li>
          <li>Docker for containerization</li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Impact</h3>
        <p className="text-gray-700 mt-2">
          The redesigned application led to a significant increase in user satisfaction, reduced training time for new users, and improved overall performance in data analysis tasks.
        </p>

        <Link href="/projects" className="mt-8 inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300">
          Back to Projects
        </Link>
      </section>
    </div>
  );
}
