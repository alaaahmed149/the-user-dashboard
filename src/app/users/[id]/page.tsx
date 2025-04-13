'use client'
import { useGetUserQuery } from "@/src/features/users/userAPI";
import Image from "next/image";
import { use } from "react";

export default function User({params}: {params: Promise<{id: string}>}) {
    const id = use(params).id;
    const {data: user, isLoading, error} = useGetUserQuery(id);

    if (isLoading) return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen text-2xl">Error.</div>;
    return (
        <div className="flex justify-center items-center p-5">
            <div className="p-7 rounded-xl shadow-md text-xl flex gap-4  w-full h-full">
            <Image src="/user.png" alt="profile" width={200} height={200} />
            <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">User Details</h1>
            <p>Name: {user?.name.firstname} {user?.name.lastname}</p>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
            <p>Address: {user?.address.city}, {user?.address.street}, {user?.address.number}</p>
            </div>
        </div>
        </div>
    );
}