// projects/sas-application-redesign.tsx
"use client"; // Mark this component as a client component

import Button from '../../components/Button';

export default function SASApplicationRedesign() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">SAS Application Redesign</h1>
        <p className="text-xl mt-4">
          A comprehensive overhaul of the SAS application to improve usability and performance.
        </p>
      </header>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-4xl font-bold">Project Overview</h2>
        <p className="mt-2">
          This project focused on redesigning the SAS application to enhance its functionality, user experience, and overall performance. The goal was to create a more intuitive interface and streamline processes for end users.
        </p>

        <h3 className="text-3xl font-bold mt-6">Key Features</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Revamped user interface for improved navigation</li>
          <li>Enhanced data visualization capabilities</li>
          <li>Integration of advanced analytics features</li>
          <li>Performance optimizations for faster processing times</li>
          <li>Rewrite of some parts of the windows native program to a web/api app</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Technologies Used</h3>
        <p className="mt-2">
          The redesign was developed using the following technologies:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>C# for backend logic, gateway and data processing</li>
          <li>Angular/typescript for the frontend interface</li>
          <li>Windev/hfsql for legacy code optimizations and compatibility</li>
          <li>MSSQL for data management</li>
          <li>RabbitMQ for logging</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Impact</h3>
        <p className="mt-2">
          The redesigned application led to a significant increase in user satisfaction and boost in performance, reduced training time for new users, and improved greatly performance in day to day tasks for fleet managers and data/fleet teams.
        </p>

        <Button href='/projects'>Back to Projects</Button>

      </section>
    </div>
  );
}
