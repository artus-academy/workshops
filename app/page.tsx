import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black font-sans">
      <main className="flex flex-col items-center justify-center px-6 pt-24 pb-0 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8">
            Workshops
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
            This site contains the resources for the workshops conducted by{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              ArtUs Academy
            </span>
            .
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://artusacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-950 font-bold hover:scale-105 transition-transform shadow-xl shadow-zinc-200 dark:shadow-none"
            >
              Visit Academy
            </a>
          </div>
        </div>
      </main>

      <section id="resources" className="w-full max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-zinc-100">
          Latest Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all cursor-pointer">
            <div className="h-1 bg-zinc-100 dark:bg-zinc-800 mb-6 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 transition-colors" />
            <h3 className="text-xl font-bold mb-2">Git and GitHub Workshop</h3>
            <p className="text-zinc-500 text-sm">
              A comprehensive workshop on Git and GitHub.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
