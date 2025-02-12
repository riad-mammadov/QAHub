import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-emerald-900 to-emerald-700 pt-4">
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
              Arabic language. Our platform is made to help you read and learn
              the language of the Quran.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-white text-2xl font-bold mb-4">
              Track Your Progress
            </h2>
            <p className="text-emerald-100">
              Stay motivated with our Hifdh Tracker. Set goals, monitor your
              memorisation progress, and celebrate your achievements as you
              connect with the words of Allah.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Start Your Arabic Journey Today
          </h2>
          <Link href="/arabic">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200">
              Begin Learning
            </button>
          </Link>
        </section>
      </main>

      <footer className="bg-emerald-900 text-white py-8 ">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 QAHub. All rights reserved.</p>
          <p className="mt-2">
            Dedicated to spreading knowledge of the Quran and Arabic language.
          </p>
          <p className="mt-2">Made by Riad using Next with 💚</p>
        </div>
      </footer>
    </div>
  );
}
