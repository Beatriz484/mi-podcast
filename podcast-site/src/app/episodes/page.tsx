import Link from "next/link";
import { PageFrame, SectionHeading } from "@/components/site-shell";
import { episodes } from "@/data/episodes";

export default function EpisodesPage() {
  return (
    <PageFrame>
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <section className="mb-12 space-y-6">
          <SectionHeading
            eyebrow="Episodes"
            title="A full archive of reflections, stories, and creative prompts."
            description="Twenty thoughtfully crafted episodes, each designed to feel polished, thoughtful, and easy to explore at a glance."
          />
        </section>

        <div className="grid gap-5">
          {episodes.map((episode) => (
            <article
              key={episode.id}
              className="grid gap-5 rounded-[1.6rem] border border-white/10 bg-[#101822]/75 p-5 md:grid-cols-[0.7fr_2.3fr] md:p-6"
            >
              <div className="flex items-center justify-between rounded-[1.3rem] border border-[#d7a84e]/20 bg-[#d7a84e]/8 p-4 md:flex-col md:items-start md:justify-between">
                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-[#d7a84e]">Ep. {episode.number}</span>
                <span className="text-sm text-[#dfe4ea]">{episode.date}</span>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#d7a84e]">{episode.category}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{episode.title}</h2>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#dfe4ea]">
                    {episode.duration}
                  </span>
                </div>

                <p className="text-base leading-8 text-[#c3ced9]">{episode.description}</p>
                <p className="text-sm leading-7 text-[#b5c0cc]">{episode.excerpt}</p>

                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-full bg-[#d7a84e] px-4 py-2 text-sm font-semibold text-[#141312] transition hover:bg-[#e9be6c]"
                  >
                    Play preview
                  </Link>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9aa8b5]">Mock episode</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
