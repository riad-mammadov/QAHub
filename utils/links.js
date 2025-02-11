import { Book, Feather, BookOpen, BarChart2 } from "lucide-react";

export const navLinks = [
  {
    title: "Learn Arabic",
    href: "/arabic",
    icon: <Book className="w-5 h-5" />,
  },
  { title: "Quran", href: "/quran", icon: <BookOpen className="w-5 h-5" /> },
  { title: "Hadith", href: "/hadith", icon: <Feather className="w-5 h-5" /> },
  {
    title: "Hifdh Tracker",
    href: "/track",
    icon: <BarChart2 className="w-5 h-5" />,
  },
];
