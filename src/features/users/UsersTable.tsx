"use client";
import { useGetUsersQuery } from "./userAPI";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function UsersTable() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: users = [], isLoading, error } = useGetUsersQuery();
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  if (error) return <div className="text-center text-2xl">Error: </div>;

  const usersPerPage = 5;
  const filteredUsers = users?.filter(
    (user) =>
      user.name.firstname.toLowerCase().includes(search.toLowerCase()) &&
      (roleFilter ? (user.role || "User") === roleFilter : true)
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-semibold text-gray-800">Users</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-400 rounded-md px-2 py-2"
          />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="border rounded-md px-3 py-2 border-gray-400"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedUsers?.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {user.name.firstname}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {user.name.lastname}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {user.email}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {user.role || "User"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-2 mt-4 mb-4 justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded-md cursor-pointer ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
