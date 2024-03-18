import { Toaster } from "@/shadcn/components/ui/toaster";
import MobileNav from "../components/shared/MobileNav";
import Sidebar from "../components/shared/Sidebar";
import ChatBot from "../components/shared/ChatBot";
import { SidebarProvider } from "../providers/SidebarContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <SidebarProvider>
        <MobileNav />
        <ChatBot />
      </SidebarProvider>

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
