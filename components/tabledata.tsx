"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Define the interface for user data
interface User {
  _id: string;
  name: string;
  email: string;
  age: number;
}

export default function Users() {
  // Initialize userData as an empty array with User type
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get<User[]>("http://localhost:3000/");
      console.log(result.data);

      // Ensure that the data is an array before setting the state
      if (Array.isArray(result.data)) {
        setUserData(result.data);
      } else {
        console.error("Fetched data is not an array");
      }
    } catch (err) {
      console.error("Something went wrong", err);
    }
  };

  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/deleteuser/${id}`);
      const newUserData = userData.filter((item) => item._id !== id);
      setUserData(newUserData);
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  // Check if userData is an array before calling map
  if (!Array.isArray(userData)) {
    return <div>Error: User data is not an array</div>;
  }

  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Age</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((rs, index) => (
          <tr key={rs._id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{rs.name}</td>
            <td className="py-3 px-6">{rs.email}</td>
            <td className="py-3 px-6">{rs.age}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href={`/user/view/${rs._id}`} className="btn btn-info">
                View
              </Link>
              <Link href={`/user/edit/${rs._id}`} className="btn btn-primary">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(rs._id)}
                className="btn btn-secondary"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
