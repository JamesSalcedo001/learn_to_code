"use client";

import { useState, useEffect } from "react";


export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setCount(data.count))
    .catch((error) => console.error("Error fetching data: ", error));
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
      <p className="text-lg">Page Count from API: {count}</p>
    </main>
  );
}
