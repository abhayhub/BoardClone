
import {Sidebar} from "./_components/sidebar"
import { OrgSidebar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";
interface DashboardLayoutProps {
    children : React.ReactNode;
}

const DashboardLayout = ({children,} : DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    {/* Organisation Sidebar */}
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        {/* Add Navbar */}
                        <Navbar />
                        {children}
                    </div>
                </div>
                
            </div>
        </main>
    );
};

export default DashboardLayout;