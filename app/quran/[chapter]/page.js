"use client";

import { useState, useEffect, useRef } from "react";

import { useParams } from "next/navigation";

function ChapterPage() {
  const params = useParams();
  const chapter = params.chapter;

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://quranapi.pages.dev/api/${chapter}.json`
      );
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, [chapter]);

  if (!data)
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center mt-20">
          {data.arabic1.map((verse, index) => (
            <p key={index} className="text-3xl tracking-widest mb-2">
              {verse}
            </p>
          ))}
          <p className="text-lg text-gray-300">{data.translation1}</p>
        </div>
      </main>
    </div>
  );
}

export default ChapterPage;
