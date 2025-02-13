"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";

import { useParams } from "next/navigation";
import { surahs } from "@/utils/surahs";

function ChapterPage() {
  const params = useParams();
  const chapter = params.chapter;

  const [data, setData] = useState(null);

  const verseRefs = useRef([]);

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

  const scrollToVerse = (index) => {
    verseRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl mt-20 font-bold">
            {surahs[chapter - 1].title}
          </h1>
        </div>
        <div className="space-y-12">
          {data.arabic1.map((verse, index) => (
            <div
              key={index}
              ref={(el) => (verseRefs.current[index] = el)}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col">
                <p className="text-3xl lg:text-4xl tracking-wider mb-6 text-right font-arabic">
                  {verse}
                </p>
                <div className="lg:w-full lg:pr-8">
                  <p className="text-base lg:text-lg text-gray-300 mb-4">
                    {data.english[index]}
                  </p>
                  <div className="text-sm text-gray-400 text-right">
                    Verse {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ChapterPage;
