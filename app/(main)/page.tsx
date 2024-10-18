"use client";
import { useState } from "react";
import EmptyState from "../_components/emptyState";

export default function Home() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div className="p-4 h-full">
      <div className="h-full bg-white shadow-md p-4">
        <main className="main flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
          <h2 className="font-extrabold text-indigo-600">Dashboard</h2>
        </main>
        {videoList && <EmptyState />}
      </div>
    </div>
  );
}
