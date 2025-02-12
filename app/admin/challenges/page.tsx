'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Filter } from 'lucide-react';
import Logo from '../../../assets/umuravaBg.webp'

export default function AdminChallenges() {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All Challenge', count: 6 },
    { id: 'completed', label: 'Completed Challenge', count: 2 },
    { id: 'open', label: 'Open Challenge', count: 2 },
    { id: 'ongoing', label: 'Ongoing Challenge', count: 2 },
  ];

  const challenges = [
    {
      id: 1,
      title: 'Design a Dashboard for SokoFund',
      skills: ['UI/UX Design', 'User Research', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
      status: 'Open',
    },
    {
      id: 2,
      title: 'Design a Dashboard for SokoFund',
      skills: ['UI/UX Design', 'User Research', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
      status: 'Open',
    },
    {
      id: 3,
      title: 'Design a Dashboard for SokoFund',
      skills: ['UI/UX Design', 'User Research', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
      status: 'Open',
    },
    {
      id: 4,
      title: 'Design a Dashboard for SokoFund',
      skills: ['UI/UX Design', 'User Research', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
      status: 'Open',
    },
    {
      id: 5,
      title: 'Design a Dashboard for SokoFund',
      skills: ['UI/UX Design', 'User Research', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
      status: 'Open',
    },
    {
      id: 6,
      title: 'Design a Dashboard for SokoFund',
      skills: ['UI/UX Design', 'User Research', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
      status: 'Open',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-secondary mb-2">Challenges</h1>
          <p className="text-gray-600">Manage all challenges and hackathons</p>
        </div>
        <Link 
          href="/admin/challenges/new" 
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create New Challenge
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-blue-50 text-primary'
            }`}
          >
            {tab.label}
            <span className={`px-2 rounded-full ${
              activeTab === tab.id ? 'bg-white/20' : 'bg-white'
            }`}>{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="bg-primary p-6 relative">
              <img src={Logo.src} alt="Umurava" />
              <span className="absolute top-2 right-2 px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                {challenge.status}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-4">{challenge.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Seniority Level: {challenge.seniority}</p>
                <p>Timeline: {challenge.timeline}</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Link 
                  href={`/admin/challenges/${challenge.id}`}
                  className="flex-1 text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Challenge
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
          Previous
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
          Next
        </button>
      </div>
    </div>
  );
}