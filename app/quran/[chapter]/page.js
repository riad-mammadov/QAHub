"use client";

import { useState, useEffect, useRef } from "react";

import { useParams } from "next/navigation";
import { surahs } from "@/utils/surahs";
import { CircularProgress } from "@mui/material";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
        <CircularProgress color="inherit" />
      </div>
    );

  // const scrollToVerse = (index) => {
  //   verseRefs.current[index]?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold text-center">
            {surahs[chapter - 1].title}
          </h1>
        </header>

        <div className="space-y-8">
          {data.arabic1.map((verse, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">
                    {data.surahNo}:{index + 1}
                  </span>
                </div>
                <p
                  className="text-4xl lg:text-5xl text-white leading-10 tracking-wider text-right font-arabic"
                  style={{ lineHeight: "5rem" }}
                >
                  {verse}
                </p>
                <Separator className="my-4" />
                <p className="text-base lg:text-lg text-gray-300">
                  {data.english[index]}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChapterPage;
