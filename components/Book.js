'use client'; // Make sure to include this line for Next.js 13+ with client components

import React from 'react';

export default function Book() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-6">
      <h1 className="text-4xl font-bold mb-6">Book Your Cruise</h1>
      <form className="w-full max-w-lg bg-white p-8 rounded shadow-md">
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
          <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your first name" />
        </div>
        
        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
          <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your last name" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
          <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your phone number" />
        </div>

        {/* Thai or Non-Thai Option */}
        <div className="mb-6">
          <label htmlFor="nationality" className="block text-gray-700 font-bold mb-2">Are you Thai or Non-Thai?</label>
          <select id="nationality" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select an option</option>
            <option value="thai">Thai</option>
            <option value="non-thai">Non-Thai</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">Book Now</button>
        </div>
      </form>
    </div>
  );
}
