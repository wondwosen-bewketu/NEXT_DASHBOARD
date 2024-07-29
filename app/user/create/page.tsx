"use client";

import React, { useState } from "react";
import axios from "axios";

const CreateUserPage = () => {
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    age: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/create",
        userField
      );
      console.log(response);
      window.location.href = "/";
    } catch (err) {
      console.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Add New User
      </h1>
      <form onSubmit={onSubmitChange} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Full Name..."
            onChange={changeUserFieldHandler}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email..."
            onChange={changeUserFieldHandler}
          />
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Age..."
            onChange={changeUserFieldHandler}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default CreateUserPage;
