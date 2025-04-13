import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (<div className="flex flex-col items-center justify-center h-screen gap-5">
    <Image src="/dashboard.png" alt="Dashboard" width={100} height={100} />
    <h1 className="text-4xl font-bold">Welcome to The User Dashboard</h1>
    <h2 className="text-2xl font-bold">Log In to your account</h2>
    <Link href="/login" className="bg-black hover:bg-gray-800 drop-shadow-2xl text-white px-4 py-2 rounded-md">Login</Link>
  </div>
  );
}
