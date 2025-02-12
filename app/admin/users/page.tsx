"use client";

import { useState } from "react";
import { Search, Filter, MoreVertical } from "lucide-react";
import Link from "next/link";

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    {
      id: 1,
      name: "Hilaire Sh",
      role: "Product Designer",
      email: "hilaire@uidesign",
      status: "Active",
      joinDate: "2024-02-15",
    },
    {
      id: 2,
      name: "Christian Manzi",
      role: "UI/UX Designer",
      email: "christian@design.com",
      status: "Active",
      joinDate: "2024-02-10",
    },
    {
      id: 3,
      name: "Jolly Mutesi",
      role: "Content Creator",
      email: "jolly@content.com",
      status: "Inactive",
      joinDate: "2024-01-20",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-secondary mb-2">Users</h1>
          <p className="text-gray-600">Manage platform users and their roles</p>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-lg">
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">
                  Role
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">
                  Join Date
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-medium">
                          {user.name[0]}
                        </span>
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{user.role}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === "Active"
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{user.joinDate}</td>
                  <td className="p-4">
                    <button
                      type="button"
                      title="More actions"
                      aria-label="More actions"
                      className="p-2 hover:bg-gray-50 rounded-lg"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
