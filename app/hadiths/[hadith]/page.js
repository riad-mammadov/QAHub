"use client";
import { hadiths } from "@/utils/hadiths";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ChapterButton({ chapter }) {
  return (
    <div className="bg-gray-800 h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6 ">
        <h3 className="text-gray-400 text-left font-bold mb-2">
          {chapter.chapterNumber}
        </h3>
        <div className="flex flex-col justify-between items-center space-y-8">
          <span className="text-white font-arabic text-2xl">
            {chapter.chapterArabic}
          </span>
          <span className="text-gray-400 font-mono text-center">
            {chapter.chapterEnglish}
          </span>
        </div>
      </div>
    </div>
  );
}

function HadithPage() {
  const params = useParams();
  const hadith = params.hadith;
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://hadithapi.com/api/${hadith}/chapters?apiKey=$2y$10$FsqBlzdfKZj6V27HygT4iuZygX6CnnGOQUyLDx3v07XNFWJawNKFi`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        return err.message;
      }
    }

    fetchData();
  }, [hadith]);

  return (
    <div>
      <h1 className="text-white text-center font-serif text-2xl mt-4">
        {hadiths.find(({ slug }) => slug === hadith).title}
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12 p-4">
        {data.chapters ? (
          data.chapters.map((chapter, index) => (
            <Link
              href={`${hadith}/${chapter.chapterEnglish.replace(/\s/g, "")}/`}
              key={index}
              className="col-span-1"
            >
              <ChapterButton
                chapter={chapter}
                className="w-full h-full text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                {chapter.chapterEnglish}
              </ChapterButton>
            </Link>
          ))
        ) : (
          <li className="col-span-full text-center">
            <h1>Loading...</h1>
          </li>
        )}
      </ul>
    </div>
  );
}

export default HadithPage;
