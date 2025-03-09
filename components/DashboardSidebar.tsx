import { auth } from '@/auth';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, Inbox, Calendar, Search, Settings } from 'lucide-react';
import Image from 'next/image';

const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];
export const DashboardSidebar = async () => {
  const session = await auth();
  return (
    <Sidebar className="h-screen flex flex-col">
      <SidebarContent>
        <SidebarGroup className="flex-grow">
          <SidebarHeader className="text-2xl">StudyLog</SidebarHeader>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col flex-grow">
            <SidebarMenu className="flex-grow">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <div className="flex-grow" />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <div className="py-6 border border-slate-400 rounded-md">
                    {session?.user?.image ? (
                      <Image
                        width="36"
                        height="36"
                        src={session.user.image}
                        alt="アイコン"
                        className="rounded-xl"
                      />
                    ) : (
                      <></>
                    )}
                    <span>{session?.user?.name ?? '不明'}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
