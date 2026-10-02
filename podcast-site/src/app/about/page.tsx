import { PageFrame, SectionHeading } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <PageFrame>
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About"
              title="Podcadst is built for thoughtful people who want more depth in the everyday."
              description="We believe meaningful work, creative energy, and personal direction are shaped by the stories we tell ourselves and the rituals we return to again and again."
            />

            <div className="space-y-4 text-base leading-8 text-[#c3ced9]">
              <p>
                Podcadst started with a simple idea: not every great conversation needs to be loud to be memorable. Some of the most useful conversations are the ones that make room for reflection, patience, and clarity.
              </p>
              <p>
                This show explores the emotional and creative mechanics behind a life that feels purposeful. From creative identity to work habits, storytelling, and personal reinvention, each episode invites listeners to slow down long enough to notice what actually matters.
              </p>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-[#101822]/80 p-6">
            <div className="mb-6 rounded-[1.4rem] border border-[#d7a84e]/20 bg-[linear-gradient(135deg,#1a2b38_0%,#111d29_100%)] p-5">
              <div className="flex h-40 items-end rounded-[1.1rem] bg-[radial-gradient(circle_at_top,#d7a84e_0%,rgba(215,168,78,0.22)_20%,transparent_35%),linear-gradient(135deg,#182430_0%,#111c27_100%)] p-4">
                <div className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-[#f7d589]">
                  Editorial voice
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["20", "mock episodes"],
                ["4", "core themes"],
                ["∞", "ways to listen"],
                ["1", "clear point of view"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#c6d1dd]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <SectionHeading
            eyebrow="What it explores"
            title="A small set of ideas, explored deeply."
            description="The show stays intentionally focused on the themes that shape better decisions, richer creative lives, and more grounded personal growth."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Creative life", "Making work that feels alive, meaningful, and deeply yours."],
              ["Purpose", "Learning what deserves your time, attention, and energy."],
              ["Storytelling", "Understanding how narrative shapes lives, values, and culture."],
              ["Growth", "Building habits that create lasting momentum rather than short-lived bursts."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-[#101822]/80 p-5">
                <div className="mb-4 h-10 w-10 rounded-full border border-[#d7a84e]/40 bg-[#d7a84e]/10" />
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm leading-7 text-[#b5c0cc]">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
