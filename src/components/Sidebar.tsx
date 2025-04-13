'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

  const links = [
    // ممكن نضيفوا روابط تانية 
    { href: "/dashboard", label: "Dashboard" },
    { href: "/users", label: "Users" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div className="bg-gray-100 h-full p-4 space-y-4 w-50 min-h-screen">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`block p-2 rounded ${
            pathname === href ? "bg-gray-300 font-semibold" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}