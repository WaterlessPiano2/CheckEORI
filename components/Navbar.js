import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <p class="text-2xl font-bold text-gray-800">My Todos</p>
      <div className="flex">
        <a
          href="/api/logout"
          className="rounded bg-blue-500 hover:bg-blue-400 text-white px-4 py-1"
        >Logout</a>        <a
          href="/api/Login"
          className="rounded bg-blue-500 hover:bg-blue-400 text-white px-4 py-1"
        >Log In</a>
      </div>
    </nav>
  );
}
