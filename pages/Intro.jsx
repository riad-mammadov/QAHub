"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Book, Feather, BookOpen, BarChart2 } from "lucide-react";
import MobileNavbar from "@/components/MobileNavbar";

const links = [
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 pt-4">
      <Head>
        <title>QAHub - Quran & Arabic Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <button className="text-white text-2xl font-bold">QAHub</button>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>
                    <button className="text-white hover:text-emerald-200 transition-colors duration-200 flex items-center">
                      {link.icon}
                      <span className="ml-2">{link.title}</span>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <MobileNavbar
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          links={links}
        />
      )}

      <main className="container mx-auto px-4 py-12 md:py-24">
        <section className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            بِسۡمِ اللّٰہِ الرَّحۡمٰنِ الرَّحِیۡمِ
          </h1>
          <p className="text-emerald-100 text-xl md:text-2xl">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-white text-2xl font-bold mb-4">Learn & Grow</h2>
            <p className="text-emerald-100">
              Embark on a journey to deepen your understanding of the Quran and
              Arabic language. Our comprehensive resources and interactive
              lessons are designed to help you progress at your own pace.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-white text-2xl font-bold mb-4">
              Track Your Progress
            </h2>
            <p className="text-emerald-100">
              Stay motivated with our Hifdh Tracker. Set goals, monitor your
              memorization progress, and celebrate your achievements as you
              connect with the words of Allah.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Start Your Journey Today
          </h2>
          <Link href="/arabic">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200">
              Begin Learning
            </button>
          </Link>
        </section>
      </main>

      <footer className="bg-emerald-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 QAHub. All rights reserved.</p>
          <p className="mt-2">
            Dedicated to spreading knowledge of the Quran and Arabic language.
          </p>
        </div>
      </footer>
    </div>
  );
}
