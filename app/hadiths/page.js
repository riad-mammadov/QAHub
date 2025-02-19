"use client";
import { hadiths } from "@/utils/hadiths";
import { surahs } from "@/utils/surahs";
import { Box, Tab, Tabs, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function HadithButton({ title }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-white text-lg font-semibold font-serif mb-2">
          {title}
        </h3>
      </div>
    </div>
  );
}

function Quran() {
  const [currentHadiths, setCurrentHadiths] = useState(hadiths);

  const handleSearch = (event) => {
    const search = event.toLowerCase();
    const filtered = hadiths.filter((hadith) =>
      hadith.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(search)
    );
    setCurrentHadiths(filtered);
  };

  return (
    <div className={`h-screen bg-gray-900 transition-colors duration-300`}>
      <main className="container mx-auto px-4">
        <div className="mb-12 flex flex-col justify-start mt-20 gap-8 items-start">
          <div className="sm:mb-0 relative">
            <TextField
              id="search-surah"
              label="Search Hadith"
              variant="outlined"
              onChange={(e) => handleSearch(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.23)",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#10B981",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",

                  "&.Mui-focused": {
                    color: "#10B981",
                  },
                },
              }}
            />
          </div>
        </div>
        <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentHadiths.map((hadith) => (
            <Link href={`/hadiths/${hadith.slug}`} key={hadith.title}>
              <HadithButton key={hadith.title} title={hadith.title} />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Quran;
