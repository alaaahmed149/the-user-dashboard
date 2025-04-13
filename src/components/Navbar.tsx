'use client'
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/src/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleLogOut = () => {
        dispatch(logout());
        router.push("/");
    }
    return (
        <nav className="shadow-md text-black font-bold flex justify-between items-center px-6 py-5 text-lg">
            <div className="flex items-center gap-4">
                <Image src="/dashboard.png" alt="logo" width={40} height={40} />
                <h1>UserDashboard</h1>
            </div>
            <button className="bg-black text-white  px-4 py-2 rounded-md cursor-pointer" onClick={handleLogOut}>
                LogOut
            </button>
        </nav>
    );
}