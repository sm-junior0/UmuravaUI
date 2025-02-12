"use client";

import { BarChart3, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/umuravaBg.webp";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Challenge",
      value: "29,405",
      change: "+15%",
      period: "This Week",
      icon: Award,
    },
    {
      title: "Total Participants",
      value: "29,405",
      change: "+15%",
      period: "This Week",
      icon: Users,
    },
    {
      title: "Completed Challenges",
      value: "5,837",
      change: "+15%",
      period: "Last 30 days",
      icon: BarChart3,
    },
    {
      title: "Ongoing Challenges",
      value: "5,837",
      change: "+15%",
      period: "Last 30 days",
      icon: TrendingUp,
    },
  ];

  const recentChallenges = [
    {
      id: 1,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 2,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 3,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
      status: "Open",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-secondary mb-2">
            Welcome back Hilaire,
          </h1>
          <p className="text-gray-600">
            Build Work Experience through Skills Challenges
          </p>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <div className="flex gap-2">
            <button
              type="button"
              title="Notifications"
              aria-label="Notifications"
              className="p-2 rounded-lg relative"
            >
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
              <svg
                className="w-6 h-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=96&h=96"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-gray-500">{stat.period}</div>
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                {stat.title}
              </h3>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-secondary">
                  {stat.value}
                </p>
                <span className="text-green-500 text-sm">{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-secondary">
            Recent Challenges
          </h2>
          <Link
            href="/admin/challenges"
            className="text-primary hover:underline"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
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
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm"
                    >
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
      </div>
    </div>
  );
}
