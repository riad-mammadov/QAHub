"use client";
import { Button } from "@/components/ui/button";
import { surahs } from "@/utils/surahs";
import { Box, Tab, Tabs, TextField } from "@mui/material";
import { useState } from "react";

function SurahButton({ title, chapter }) {
  return (
    <Button className="w-[100%] py-6 px-8  bg-emerald-700 hover:bg-emerald-500 text-white hover:text-black transition-all duration-300 rounded-lg shadow-md flex items-center justify-start gap-4 group">
      <span
        className="
        w-10 h-10 
        bg-emerald-900 group-hover:bg-emerald-300
        text-white group-hover:text-emerald-900
        flex items-center justify-center 
        font-bold text-sm
        transition-all duration-300
        transform rotate-45
      "
      >
        <span className="transform -rotate-45">{chapter}</span>
      </span>
      <span className="text-lg font-bold">{title}</span>
    </Button>
  );
}

function Quran() {
  const [value, setValue] = useState("one");

  const [search, setSearch] = useState("");
  const [currentSurah, setCurrentSurahs] = useState(surahs);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    const search = event.toLowerCase();
    setSearch(search);
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 pt-8">
      <main className="container mx-auto px-4 py-20">
        <div className="mb-12 flex flex-col-reverse justify-center sm:flex-row sm:justify-between items-center">
          <div className="mt-6 sm:mt-0">
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& label": {
                  color: "white",
                },
                "& label.Mui-focused": { color: "white" },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "green",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "green", // Ensures the hover effect is also white
                },
              }}
              id="standard-basic"
              label="Search a Surah"
              variant="standard"
              className="text-white"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
                sx={{
                  "& .MuiTab-root": {
                    color: "white",
                    fontWeight: "bold",
                  },
                  "& .Mui-selected": {
                    color: "lightgreen",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "green",
                  },
                }}
              >
                <Tab
                  value="one"
                  label="Surahs"
                  className="text-emerald-200 font-bold"
                />
                <Tab
                  value="two"
                  label="Juz"
                  className="text-emerald-200 font-bold"
                />
              </Tabs>
            </Box>
          </div>
        </div>
        <section className="text-center mb-12 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentSurah.map((surah) => (
              <SurahButton
                key={surah.title}
                title={surah.title}
                chapter={surah.chapterId}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Quran;
