// projects/winflotte-software-enhancements.tsx
"use client"; // Mark this component as a client component

import Button from '../../components/Button';

export default function WinflotteSoftwareEnhancements() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">Winflotte Software Enhancements</h1>
        <p className="text-xl mt-4">
          An initiative to improve the functionalities and performance of the Winflotte fleet management software.
        </p>
      </header>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-4xl font-bold">Project Overview</h2>
        <p className="mt-2">
          This project involved a series of enhancements to the Winflotte software, aimed at improving its performance, usability, and feature set for fleet management operations. The goal was to deliver a more robust and efficient tool for users in the logistics and transportation industry.
        </p>

        <h3 className="text-3xl font-bold mt-6">Key Features</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Improved user interface for better navigation</li>
          <li>Advanced reporting and analytics features</li>
          <li>Real-time tracking and monitoring of fleet operations</li>
          <li>Integration with third-party APIs for enhanced functionality</li>
          <li>Bug fixes and performance optimizations</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Technologies Used</h3>
        <p className="mt-2">
          The enhancements were developed using the following technologies:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>C# for backend development</li>
          <li>SQL Server for database management</li>
          <li>Angular for frontend interface</li>
          <li>RESTful APIs for integrations</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Impact</h3>
        <p className="mt-2">
          The enhancements resulted in increased user satisfaction, reduced operational downtime, and improved overall efficiency in fleet management processes.
        </p>

        <Button href='/projects'>Back to Projects</Button>

      </section>
    </div>
  );
}
