import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
export default function ProfileLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Navbar />
            <main className="p-6 flex">
                <Sidebar />
                <div className="flex-1">{children}</div>
            </main>
        </div>
    );
}