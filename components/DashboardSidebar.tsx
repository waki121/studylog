import { auth } from '@/auth';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  Book,
  NotebookPen,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    title: 'ホーム',
    url: '/app',
    icon: Home,
  },
  {
    title: '勉強',
    url: '/app/study',
    icon: NotebookPen,
  },
  {
    title: '教科',
    url: '#',
    icon: Book,
  },
  {
    title: '設定',
    url: '#',
    icon: Settings,
  },
];
export const DashboardSidebar = async () => {
  const session = await auth();
  return (
    <SidebarProvider className="w-fit">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarHeader className="p-7"></SidebarHeader>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
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
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};
