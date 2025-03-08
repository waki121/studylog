'use client';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function AppMain() {
  const { status } = useSession();
  if (status !== 'authenticated') {
    redirect('/login');
  }
  return (
    <div className="bg-gradient-to-bl from-emerald-50 to-blue-50">
      <SidebarProvider>
        <div className="pt-20 text-center mx-auto">
          <DashboardSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
}
