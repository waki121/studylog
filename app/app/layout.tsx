import { auth } from '@/auth';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { redirect } from 'next/navigation';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ホーム - StudyLog App',
  description: '勉強時間を記録するアプリ',
};

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }
  return (
    <div className="bg-gradient-to-bl from-emerald-50 to-blue-50">
      <div className="pt-16 pl-2 text-center mx-auto">
        <SidebarProvider>
          <DashboardSidebar />
          <main>{children}</main>
        </SidebarProvider>
      </div>
    </div>
  );
}
