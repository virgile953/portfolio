// projects/mass-email-sending.tsx
"use client"; // Mark this component as a client component

import Button from '../../components/Button';

export default function MassEmailSending() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">Mass Email Sending Application</h1>
        <p className="text-xl mt-4">
          An efficient solution for sending bulk emails to improve communication and engagement.
        </p>
      </header>

      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-4xl font-bold">Project Overview</h2>
        <p className="mt-2">
          This project involved the development of a Mass Email Sending Application designed to automate the process of sending bulk emails to a large number of recipients. The solution aims to enhance communication efforts for marketing campaigns, notifications, and newsletters.
        </p>

        <h3 className="text-3xl font-bold mt-6">Key Features</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Bulk email sending with customizable templates</li>
          <li>Personalization options for recipient data</li>
          <li>Automatic email list generation based on sql requests</li>
          <li>Customer and driver selection for custom mail campains</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Technologies Used</h3>
        <p className="mt-2">
          The application was developed using the following technologies:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>C# for backend server logic</li>
          <li>Angular for the frontend interface</li>
          <li>MSSQL/HFSQL for auto generation of email lists</li>
          <li>RabbitMQ for logging</li>
        </ul>

        <h3 className="text-3xl font-bold mt-6">Impact</h3>
        <p className="mt-2">
          The implementation of this application resulted in improved efficiency in communication efforts, higher engagement rates, and a streamlined process for managing email campaigns.
        </p>

        <Button href='/projects'>Back to Projects</Button>

      </section>
    </div>
  );
}
