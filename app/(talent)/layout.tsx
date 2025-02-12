import Sidebar from '@/components/Sidebar';

export default function TalentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 main-content">{children}</main>
    </div>
  );
}