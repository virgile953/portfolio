"use client"; // Mark this component as a client component

import Button from '../../components/Button';

export default function Import_EDI() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">Automated EDI File Processing Software</h1>
        <p className="text-xl mt-4 ">
          A comprehensive solution for automatic processing of EDI files to streamline business operations.
        </p>
      </header>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-4xl font-bold">Project Overview</h2>
        <p className=" mt-2">
          This project involved the development of a software tool that automates the processing of Electronic Data Interchange (EDI) files. The solution enables organizations to handle EDI documents efficiently, reducing manual effort and improving accuracy.
        </p>

        <h3 className="text-3xl font-bold mt-6">Key Features</h3>
        <ul className="list-disc list-inside mt-2 ">
          <li>Reading of mailbox based on settings in sql</li>
          <li>Automated parsing of EDI files</li>
          <li>Customizable data mapping and transformation</li>
          <li>Integration with existing business systems</li>
          <li>Real-time reporting and error handling</li>
          <li>Interface for configuration and monitoring</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Technologies Used</h3>
        <p className=" mt-2">
          The software was developed using the following technologies:
        </p>
        <ul className="list-disc list-inside mt-2 ">
          <li>C# for application logic</li>
          <li>Angular/TypeScript for display</li>
          <li>SQL Server for data storage</li>
          <li>PowerShell for scripting tasks</li>
          <li>Windows scheduler for background use</li>
          <li>Visual Studio for development</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Impact</h3>
        <p className=" mt-2">
          The implementation of this software resulted in significant time savings, reduced errors in data processing, and enhanced overall efficiency in handling EDI transactions.
        </p>

      <Button href='/projects'>Back to Projects</Button>
      </section>
    </div>
  );
}
