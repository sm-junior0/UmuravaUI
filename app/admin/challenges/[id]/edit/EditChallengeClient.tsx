'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditChallengeClient({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: 'Design a Dashboard for Sokofund',
    deadline: '2024-12-24',
    duration: '7 Days',
    prize: '$150 - $400',
    email: 'talent@umurava.africa',
    description: 'A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design.',
    brief: 'A Fintech company that is developing a Digital Financial Platform',
    tasks: `• UX research to understand Project Requirements
• Understanding User Needs
• Understanding Business Goals
• Determine interaction between users
• Requirements Catalog`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push('/admin/challenges');
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/challenges" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-2 text-gray-600">
          <span>Challenges & Hackathons</span>
          <span>/</span>
          <span className="text-primary">Edit Challenge</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary mb-6">Edit Challenge</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Challenge/Hackathon Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter Title"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Deadline
                </label>
                <input
                  id="deadline"
                  type="date"
                  title="Challenge deadline"
                  placeholder="Select deadline date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Duration"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Money Prize
                </label>
                <input
                  type="text"
                  value={formData.prize}
                  onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Prize"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-32"
                placeholder="Enter text here..."
              />
              <p className="text-sm text-gray-500 mt-1">Keep this simple of 250 character</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Brief
              </label>
              <textarea
                value={formData.brief}
                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-32"
                placeholder="Enter text here..."
              />
              <p className="text-sm text-gray-500 mt-1">Keep this simple of 50 character</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description & Tasks
              </label>
              <textarea
                value={formData.tasks}
                onChange={(e) => setFormData({ ...formData, tasks: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-32"
                placeholder="Enter text here..."
              />
              <p className="text-sm text-gray-500 mt-1">Keep this simple of 500 character</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.push('/admin/challenges')}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Update Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}