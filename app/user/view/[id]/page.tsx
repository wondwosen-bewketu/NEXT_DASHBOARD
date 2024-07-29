"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

// Step 1: Define a type for the user
interface User {
  _id: string;
  name: string;
  age: number;
}

export default function ViewUserPage() {
  const { id } = useParams();

  // Step 2: Initialize your state with the User type
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get<User>(`http://localhost:3000/get/${id}`);
      setUser(result.data);
    } catch (err) {
      console.error("Something went wrong", err);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Or any other placeholder content
  }

  return (
    <div className="w-screen min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">User Details</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  S No.
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {user.age}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
