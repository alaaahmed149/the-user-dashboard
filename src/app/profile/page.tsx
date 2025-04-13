import Image from "next/image";

export default function ProfilePage() {
    return (
        <div className="flex justify-center items-center p-5">
            <div className="p-7 rounded-xl shadow-md text-xl flex gap-4  w-full h-full">
            <Image src="/user.png" alt="profile" width={200} height={200} />
            <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Profile Page</h1>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
            </div>
        </div>
        </div>
    );
}