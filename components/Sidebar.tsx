'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutDashboard, Award, Users, Settings, HelpCircle, Share2, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  const talentMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/talent' },
    { icon: Award, label: 'Challenges & Hackathons', href: '/talent/challenges' },
    { icon: Users, label: 'Community', href: '/talent/community' },
  ];

  const adminMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: Award, label: 'Challenges & Hackathons', href: '/admin/challenges' },
    { icon: Users, label: 'Users', href: '/admin/users' },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: 'Settings', href: isAdmin ? '/admin/settings' : '/talent/settings' },
    { icon: HelpCircle, label: 'Help Center', href: isAdmin ? '/admin/help' : '/talent/help' },
    { icon: Share2, label: 'Refer family & friends', href: isAdmin ? '/admin/refer' : '/talent/refer' },
  ];

  const menuItems = isAdmin ? adminMenuItems : talentMenuItems;

  return (
    <aside className="sidebar w-64 min-h-screen p-6 flex flex-col">
      <div>
        {/* Logo & Portal Header */}
        <div className="mb-10">
          <Link href={isAdmin ? '/admin' : '/talent'} className="block">
            <h1 className="text-2xl font-bold">Umurava</h1>
            <p className="text-sm text-white/80">{isAdmin ? 'Admin Portal' : 'Talent Portal'}</p>
          </Link>
        </div>
        
        {/* Main Menu */}
        <nav className="space-y-6">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-white text-primary' : 'hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Bottom Section: Settings, Help Center, Refer, Profile, Logout */}
      <div className="mt-auto pt-6 border-t border-white/10 space-y-2">
        {bottomMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isActive ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* User Profile Section */}
      <div className="border-t border-white/10 pt-4 flex items-center gap-3">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=96&h=96"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium">Hilaire Sh</span>
          <span className="text-xs text-white/80">hilaire@guidesign</span>
        </div>
        <Link href="/auth/logout" className="ml-auto hover:text-red-500">
          <LogOut size={20} />
        </Link>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
