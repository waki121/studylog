import { auth } from '@/auth';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { redirect } from 'next/navigation';

export default async function AppMain() {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }
  return (
    <div className="bg-gradient-to-bl from-emerald-50 to-blue-50">
        <div className="pt-20 text-center mx-auto">
          <DashboardSidebar />
        </div>
    </div>
  );
}
