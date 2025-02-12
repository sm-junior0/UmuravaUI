'use client';

import { Search, Book, MessageCircle, FileText, ExternalLink } from 'lucide-react';

export default function HelpPage() {
  const helpCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of using the admin portal',
      articles: [
        'Platform Overview',
        'Managing Users',
        'Creating Challenges',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Common Questions',
      description: 'Find answers to frequently asked questions',
      articles: [
        'User Permissions',
        'Challenge Settings',
        'Notification System',
      ],
    },
    {
      icon: FileText,
      title: 'Guides & Tutorials',
      description: 'Detailed guides for advanced features',
      articles: [
        'Advanced User Management',
        'Custom Challenge Rules',
        'Analytics Dashboard',
      ],
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-secondary mb-2">Help Center</h1>
      <p className="text-gray-600 mb-8">Find help and learn more about using the admin portal</p>

      <div className="relative max-w-2xl mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {helpCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="p-2 bg-primary/10 w-fit rounded-lg mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-secondary mb-2">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.articles.map((article, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-primary hover:underline flex items-center gap-2">
                      {article}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-primary/5 rounded-lg p-6 max-w-2xl">
        <h2 className="text-lg font-semibold text-secondary mb-2">Need more help?</h2>
        <p className="text-gray-600 mb-4">Contact our support team for personalized assistance</p>
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
}