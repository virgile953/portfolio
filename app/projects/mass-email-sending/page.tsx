// projects/mass-email-sending.tsx
"use client"; // Mark this component as a client component

import Link from 'next/link';

export default function MassEmailSending() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600">Mass Email Sending Application</h1>
        <p className="text-xl mt-4 text-gray-700">
          An efficient solution for sending bulk emails to improve communication and engagement.
        </p>
      </header>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-4xl font-bold text-blue-600">Project Overview</h2>
        <p className="text-gray-700 mt-2">
          This project involved the development of a Mass Email Sending Application designed to automate the process of sending bulk emails to a large number of recipients. The solution aims to enhance communication efforts for marketing campaigns, notifications, and newsletters.
        </p>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Key Features</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Bulk email sending with customizable templates</li>
          <li>Personalization options for recipient data</li>
          <li>Analytics dashboard for tracking email performance</li>
          <li>Integration with existing CRM systems</li>
          <li>User-friendly interface for campaign management</li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Technologies Used</h3>
        <p className="text-gray-700 mt-2">
          The application was developed using the following technologies:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Node.js for backend server logic</li>
          <li>React for the frontend interface</li>
          <li>MongoDB for data storage</li>
          <li>Nodemailer for email delivery</li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mt-6">Impact</h3>
        <p className="text-gray-700 mt-2">
          The implementation of this application resulted in improved efficiency in communication efforts, higher engagement rates, and a streamlined process for managing email campaigns.
        </p>

        <Link href="/projects" className="mt-8 inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300">
          Back to Projects
        </Link>
      </section>
    </div>
  );
}
