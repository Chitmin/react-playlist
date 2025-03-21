import * as React from "react";
import {
  Frame,
  House,
  ListMusic,
  ListVideo,
  Map,
  PieChart,
  TrendingUp,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Joshua",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Songs",
      url: "/songs",
      icon: ListVideo,
    },
    {
      title: "Playlists",
      url: "/playlists",
      icon: ListMusic,
    },
    {
      title: "Just For You",
      url: "/just-for-you",
      icon: User,
    },
    {
      title: "Top Charts",
      url: "/top-charts",
      icon: TrendingUp,
    },
  ],
  personalLists: [
    {
      name: "Workout Mix",
      url: "/workout-mix",
      icon: ListVideo,
    },
    {
      name: "Chillin' at Home",
      url: "/chillin-at-home",
      icon: ListVideo,
    },
    {
      name: "Booping at Adobe",
      url: "booping-at-adobe",
      icon: ListVideo,
    },
    {
      name: "XD 4 Life",
      url: "/xd-for-life",
      icon: ListVideo,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      {...props}
      className="max-h-fit h-fit overflow-hidden px-2 pt-2 pb-0 rounded-bl-[65px] overflow-hidden"
    >
      <SidebarHeader className="mb-8">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <NavUser user={data.user} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.personalLists} />
      </SidebarContent>
    </Sidebar>
  );
}
