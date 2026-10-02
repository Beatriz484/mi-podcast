import Link from "next/link";
import { episodes, featuredEpisode } from "@/data/episodes";
import { PageFrame, SectionHeading } from "@/components/site-shell";

export default function Home() {
  return (
    <PageFrame>
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#101a23_0%,#17191b_55%,#0e1319_100%)] p-6 shadow-[0_40px_120px_rgba(13,17,23,0.8)] md:grid-cols-[1.2fr_0.8fr] md:p-10 lg:p-12">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#d7a84e]/35 bg-[#d7a84e]/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#f7d589]">
              New season · Episode 1
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Thoughtful stories for people building a life that feels genuinely theirs.
              </h1>
              <p className="max-w-lg text-base leading-8 text-[#c6d1dd] sm:text-lg">
                Podcadst is a modern storytelling podcast exploring creativity, purpose, and the quiet rituals that make meaningful work possible.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/episodes"
                className="inline-flex items-center justify-center rounded-full bg-[#d7a84e] px-6 py-3 text-sm font-semibold text-[#141312] transition hover:bg-[#e9be6c]"
              >
                Browse episodes
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-[#d7a84e]/20 bg-[#0d141b] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="mb-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.26em] text-[#d7a84e]">
              <span>Featured</span>
              <span>01</span>
            </div>

            <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,#1a222c_0%,#131b23_45%,#0d1319_100%)] p-5">
              <div className="mb-5 flex h-40 w-full items-end rounded-[1.1rem] bg-[radial-gradient(circle_at_top,#d7a84e_0%,rgba(215,168,78,0.18)_18%,transparent_42%),linear-gradient(135deg,#182330_0%,#0f1720_100%)] p-4">
                <div className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-[#f7d589]">
                  {featuredEpisode.category}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#c0cad6]">
                  <span>{featuredEpisode.date}</span>
                  <span>{featuredEpisode.duration}</span>
                </div>
                <h2 className="text-2xl font-semibold leading-tight text-white">{featuredEpisode.title}</h2>
                <p className="text-sm leading-7 text-[#b5c0cc]">{featuredEpisode.excerpt}</p>
                <Link href="/episodes" className="inline-flex items-center gap-2 text-sm font-medium text-[#f7d589]">
                  Explore the episode archive
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <SectionHeading
            eyebrow="Why listen"
            title="A podcast designed to feel intentional from the first second."
            description="Podcadst blends warm editorial design with stories about creativity, purpose, and personal momentum."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Creative clarity", "Conversations that help you separate what matters from what only feels urgent."],
              ["Quiet confidence", "Practical ideas for building a meaningful routine and a life with stronger direction."],
              ["Stories that resonate", "Narratives built around how real people think, adjust, and keep moving forward."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-[#101822]/80 p-6">
                <div className="mb-5 h-12 w-12 rounded-full border border-[#d7a84e]/50 bg-[#d7a84e]/10" />
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm leading-7 text-[#b5c0cc]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Latest picks"
              title="Recent conversations"
              description="A few of the voices and themes shaping this season."
            />
            <Link href="/episodes" className="hidden text-sm font-medium text-[#f7d589] sm:inline-flex">
              View all episodes →
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {episodes.slice(0, 3).map((episode) => (
              <article key={episode.id} className="rounded-[1.5rem] border border-white/10 bg-[#101822]/80 p-5 transition hover:border-[#d7a84e]/40 hover:bg-[#111d29]">
                <div className="mb-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em] text-[#d7a84e]">
                  <span>{episode.category}</span>
                  <span>{episode.duration}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{episode.title}</h3>
                <p className="mb-5 text-sm leading-7 text-[#b5c0cc]">{episode.description}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs uppercase tracking-[0.18em] text-[#cfd7df]">
                  <span>Ep. {episode.number}</span>
                  <span>{episode.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
