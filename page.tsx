"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, User, Phone, Lock } from "lucide-react";

export default function Signup() {
  const [role, setRole] = useState<"farmer" | "owner">("farmer");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center items-center space-x-2">
          <img src="/logo.png" alt="KrishiConnect" className="h-24 w-auto mix-blend-multiply object-contain" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setRole("farmer")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                role === "farmer" ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Sign up as Farmer
            </button>
            <button
              onClick={() => setRole("owner")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                role === "owner" ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Sign up as Owner
            </button>
          </div>

          <form className="space-y-6" action={`/dashboard/${role}`}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
             <input
  type="text"
  required
  className="pl-10 block w-full sm:text-sm border border-gray-300 rounded-md text-black placeholder-gray-400 focus:ring-2 focus:ring-green-500"
  placeholder="Ram Kumar"
            />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
  type="text"
  required
  className="pl-10 w-full border border-gray-300 rounded-md text-black placeholder-gray-400 focus:ring-2 focus:ring-green-500"
/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
               <input
  type="password"
  required
  className="pl-10 w-full border border-gray-300 rounded-md text-black placeholder-gray-400 focus:ring-2 focus:ring-green-500"
/>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
