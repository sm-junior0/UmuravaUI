'use client';

import { ArrowLeft, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Logo from '../../../../assets/umuravaBg.webp'

export default function ChallengeDetailsClient({ params }: { params: { id: string } }) {
  const participants = [
    {
      name: 'Hilaire Sh',
      role: 'Product Designer',
      avatar: 'HS',
      status: 'active',
    },
    {
      name: 'Christian Manzi',
      role: 'UI/UX Designer',
      avatar: 'CM',
      status: 'active',
    },
    {
      name: 'Jolly Mutesi',
      role: 'Content Creator',
      avatar: 'JM',
      status: 'active',
    },
    {
      name: 'Dr. Samuel Smith',
      role: 'Mental Health Professional',
      avatar: 'SS',
      status: 'active',
    },
    {
      name: 'Dr. Lily Chen',
      role: 'Dermatologist',
      avatar: 'LC',
      status: 'active',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/challenges" className="text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2 text-gray-600">
            <span>Challenges & Hackathons</span>
            <span>/</span>
            <span className="text-primary">Design a Dashboard for Sokofund</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Delete
          </button>
          <Link
            href={`/admin/challenges/${params.id}/edit`}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Edit
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <div className="bg-primary h-48 rounded-lg mb-6 flex items-center justify-center">
              <img src={Logo.src} alt="Umurava" className="h-40 w-190"  />
            </div>
            <h1 className="text-2xl font-bold text-secondary mb-6">
              Project Brief: Payroll and HR Management System
            </h1>
            <p className="text-gray-600 mb-8">
              A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold text-secondary mb-4">Tasks:</h2>
                <h3 className="font-semibold mb-2">Product Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>UX research to understand Project Requirements</li>
                  <li>Understanding User Needs</li>
                  <li>Understanding Business Goals</li>
                  <li>Determine interaction between users</li>
                  <li>Requirements Catalog</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Product Design:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>User Interface Design for each step</li>
                  <li>Creating wireframes to outline the basic structure and layout of the web and mobile app.</li>
                  <li>Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.</li>
                  <li>Ensuring the web application works seamlessly across web, mobile, and tablet devices.</li>
                  <li>Provide a feedback session for in-development guidance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-secondary mb-4">Deliverables:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Requirements Catalog and User Interaction Diagram</li>
                  <li>User Interface Mockups</li>
                  <li>Payroll and HR System Design Completed</li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-secondary mb-6">Key Instructions:</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-secondary">Contact Email</p>
                <p className="text-gray-600">talent@umurava.africa</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Challenge Category</p>
                <p className="text-gray-600">Web design</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Duration</p>
                <p className="text-gray-600">7 Days</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Money Prize</p>
                <p className="text-gray-600">$150 - $400</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-secondary">Participants</h2>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">250</span>
            </div>
            <div className="space-y-4">
              {participants.map((participant, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">{participant.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-secondary">{participant.name}</p>
                      <p className="text-sm text-gray-600">{participant.role}</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              ))}
              <button className="w-full text-primary hover:underline text-center py-2">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}