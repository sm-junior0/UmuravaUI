'use client';

import { Share2, Copy, Mail, Users } from 'lucide-react';

export default function ReferPage() {
  const referralStats = [
    {
      icon: Users,
      label: 'Total Referrals',
      value: '124',
    },
    {
      icon: Mail,
      label: 'Pending Invites',
      value: '45',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-secondary mb-2">Refer Family & Friends</h1>
      <p className="text-gray-600 mb-8">Share Umurava with your network</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-secondary">Share Your Referral Link</h2>
                <p className="text-gray-600">Invite others to join Umurava</p>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <label htmlFor="referral-link" className="sr-only">Referral Link</label>
              <input
                id="referral-link"
                type="text"
                value="https://umurava.africa/ref/admin123"
                title="Your referral link"
                placeholder="Your referral link"
                className="flex-1 p-2 border rounded-lg bg-gray-50"
                readOnly
              />
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <Copy className="w-5 h-5" />
                Copy
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#1877F2]/90 transition-colors">
                Share on Facebook
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1DA1F2]/90 transition-colors">
                Share on Twitter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/90 transition-colors">
                Share on LinkedIn
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary mb-4">Referral Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              {referralStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-600">{stat.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-secondary mb-4">Recent Referrals</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">John Doe</p>
                    <p className="text-sm text-gray-600">john@example.com</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                  Joined
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}