import Image from "next/image";
import { Container } from "@/components/layout/container";
import { serviceCards } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b3b7a]">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Banking solutions that scale</h1>
          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            From personal accounts to enterprise financing, AGIB provides secure products designed
            to support your financial goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceCards.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>

        <section className="mt-14 grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Digital banking experience</h2>
            <p className="mt-4 text-slate-600">
              Access your accounts, transfer funds, and monitor activity in real-time with modern
              mobile and web tools.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Image
              src="/images/services-digital.png"
              alt="Mobile and digital banking"
              width={1105}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
