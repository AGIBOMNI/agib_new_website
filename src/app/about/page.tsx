import Image from "next/image";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b3b7a]">
              About AGIB
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">A trusted partner in growth</h1>
            <p className="mt-5 text-slate-600">
              AGIB Bank combines local expertise with modern banking technology to provide
              dependable services for households and businesses.
            </p>
            <p className="mt-4 text-slate-600">
              We focus on transparent advice, responsible lending, and secure digital tools that
              make banking simpler.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <Image
              src="/images/about-main.png"
              alt="AGIB branch team"
              width={1412}
              height={2006}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <section className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            { title: "Mission", body: "Deliver accessible banking and create long-term value." },
            { title: "Vision", body: "Lead digital-first banking in West Africa with trust." },
            { title: "Values", body: "Integrity, service excellence, and customer-first innovation." },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.body}</p>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
