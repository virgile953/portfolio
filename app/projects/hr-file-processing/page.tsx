// projects/hr-file-processing.tsx
"use client"; // Mark this component as a client component

import Link from 'next/link';

export default function HRFileProcessing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600">HR File Processing Automation</h1>
        <p className="text-xl mt-4 text-gray-700">
          A comprehensive solution for automating the processing of HR files to enhance operational efficiency.
        </p>
      </header>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-4xl font-bold text-blue-600">Project Overview</h2>
        <p className="text-gray-700 mt-2">
          This project involved the development of a tool that automates the processing of HR files, including recruitment, onboarding, and employee records management. The solution aims to improve efficiency and reduce manual errors in HR operations.
        </p>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Key Features</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Automatic retrieval of files from a mailbox or sftp</li>
          <li>Automated document processing and validation</li>
          <li>Integration with existing HR systems</li>
          <li>Interface for the data team</li>
          <li>Real-time reporting and analytics</li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Technologies Used</h3>
        <p className="text-gray-700 mt-2">
          The software was developed using the following technologies:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>C# for backend processing</li>
          <li>Angular/TypeScript for display</li>
          <li>Custom settings handler for customization and application logic</li>
          <li>Windows scheduler for background use</li>
          <li>MSSQL for data storage</li>
          <li>RabbitMQ for logging</li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Impact</h3>
        <p className="text-gray-700 mt-2">
          The implementation of this automation tool resulted in significant time savings form data team, improved accuracy in data processing, and enhanced overall efficiency in managing HR files.
        </p>

        <Link href="/projects" className="mt-8 inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300">
          Back to Projects
        </Link>
      </section>
    </div>
  );
}
