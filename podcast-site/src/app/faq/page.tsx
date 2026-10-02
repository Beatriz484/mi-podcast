import { PageFrame, SectionHeading } from "@/components/site-shell";
import { faqItems } from "@/data/episodes";

export default function FaqPage() {
  return (
    <PageFrame>
      <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <section className="mb-12 space-y-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions people usually ask before they hit play."
            description="A few practical answers about the show, its voice, and what kind of experience this podcast is designed to offer."
          />
        </section>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-[1.4rem] border border-white/10 bg-[#101822]/75 p-5 text-left transition hover:border-[#d7a84e]/35"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-lg font-medium text-white">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#c3ced9]">{item.answer}</p>
            </details>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
