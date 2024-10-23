"use client";

import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">About Me</h1>
        <p className="text-xl mt-4">A brief introduction and overview of my skills.</p>
      </header>
      <Navbar />
      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-3xl font-bold">Contact Information</h2>
        <p className="mt-2">
          <strong>Name:</strong> Virgile Barbera
        </p>
        <p className="mt-2">
          <strong>Address:</strong> 15 rue d&apos;Ermont, 95 320 Saint-Leu-la-Forêt
        </p>
        <p className="mt-2">
          <strong>Email:</strong> virgile.barbera@gmail.com
        </p>
        <p className="mt-2">
          <strong>Phone:</strong> +33 6 95 23 94 33
        </p>
      </section>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-2">
          <strong>Software:</strong> MS Office, SSMS, Visual Studio, Git, Sublime Text
        </p>
        <p className="mt-2">
          <strong>Languages:</strong> C#, TypeScript / Angular, NextJS, PowerShell, Python, Windev, SQL (SSMS, MySQL, HFSQL), RegEX
        </p>
        <p className="mt-2">
          <strong>Networking:</strong> IP Addressing, VLAN Creation, OVH Supervision
        </p>
      </section>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-3xl font-bold">Professional Experience</h2>
        <p className="mt-2">
          <strong>Développeur, Gestion de Projet, OptiXt (CDI)</strong> - Since August 2022
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed software for automatic processing of HR files and generating reports.</li>
          <li>Led a complete redesign of a SaaS application using Angular.</li>
          <li>Managed support requests and maintenance of legacy solutions.</li>
        </ul>

        <p className="mt-4">
          <strong>Développeur, Gestion de Projet, OptiXt (CDD)</strong> - August 2021 to July 2022
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Created a software for automatic processing of EDI files and generating reports.</li>
          <li>Developed applications for mass email processing and management.</li>
          <li>Authored operational documentation and scripts for various tasks.</li>
        </ul>

        <p className="mt-4">
          <strong>Développeur, OptiXt (Alternance)</strong> - September 2020 to August 2021
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Improved and optimized the Winflotte software.</li>
          <li>Resolved software and database issues.</li>
        </ul>
      </section>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-3xl font-bold">Education</h2>
        <p className="mt-2">
          <strong>Bachelor&apos;s Degree in Digital Solutions Development</strong>, IRIS Paris (September 2020 - August 2021)
        </p>
        <p className="mt-2">
          <strong>BTS in IT Services for Organizations</strong>, IRIS Paris (September 2018 - August 2020)
        </p>
        <p className="mt-2">
          <strong>Professional Baccalaureate in Electronic and Digital Systems</strong>, IRIS Paris (Obtained in 2018)
        </p>
      </section>
    </div>
  );
}
