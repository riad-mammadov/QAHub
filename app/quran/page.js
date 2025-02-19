"use client";
import { surahs } from "@/utils/surahs";
import { Box, Tab, Tabs, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function SurahButton({ title, chapter, revelation, value }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-emerald-400 text-lg font-bold">
            {value === "one" ? chapter : revelation}
          </span>
          <span className="text-gray-400 text-sm">
            {value === "two" ? `Surah ${chapter}` : `Revelation ${revelation}`}
          </span>
        </div>
        <h3 className="text-white text-xl font-semibold font-serif tracking-wider mb-2">
          {title}
        </h3>
      </div>
    </div>
  );
}

function Quran() {
  const [value, setValue] = useState("one");

  const [currentSurah, setCurrentSurahs] = useState(surahs);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "one") {
      setCurrentSurahs(surahs);
    } else if (newValue === "two") {
      const sortedSurahs = [...surahs].sort(
        (a, b) => a.revelationOrder - b.revelationOrder
      );

      setCurrentSurahs(sortedSurahs);
    }
  };

  const handleSearch = (event) => {
    const search = event.toLowerCase();
    const filtered = surahs.filter((surah) =>
      surah.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(search)
    );
    setCurrentSurahs(filtered);
  };

  return (
    <div className={`min-h-screen bg-gray-900 transition-colors duration-300`}>
      <main className="container mx-auto px-4 py-2">
        <div className="mb-12 flex flex-col sm:flex-row justify-between mt-20 gap-8 items-center">
          <div className="sm:mb-0 relative">
            <TextField
              id="search-surah"
              label="Search Surah"
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
          <div className="flex items-center">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="surah tabs"
              sx={{
                "& .MuiTab-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-selected": {
                    color: "#10B981",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#10B981",
                },
              }}
            >
              <Tab value="one" label="Surahs" />
              <Tab value="two" label="Revelation" />
            </Tabs>
          </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentSurah.map((surah) => (
            <Link href={`/quran/${surah.chapterId}`} key={surah.title}>
              <SurahButton
                key={surah.title}
                title={surah.title}
                chapter={surah.chapterId}
                revelation={surah.revelationOrder}
                value={value}
              />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Quran;
