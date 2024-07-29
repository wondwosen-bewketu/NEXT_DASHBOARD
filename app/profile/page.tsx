import React from "react";

export default function Profile() {
  return (
    <div className="flex flex-col h-full p-6 text-white">
      {/* Profile Card */}
      <div className="max-w-md mx-auto bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-200 p-6 text-center">
          <img
            src="/logo.png" // Replace with your profile image path
            alt="Profile Avatar"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
          />
          <h1 className="text-3xl font-semibold mt-4">John Doe</h1>
          <p className="text-lg mt-2">Software Engineer</p>
        </div>
        <div className="p-6">
          <div className="flex justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Bio</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla a euismod tincidunt, lorem metus
                suscipit augue.
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="mt-2 text-gray-600">Email: john.doe@example.com</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="mt-2 text-gray-600">
                1234 Elm Street, Springfield, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
