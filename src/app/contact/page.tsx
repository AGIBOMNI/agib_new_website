import { Container } from "@/components/layout/container";

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b3b7a]">Contact</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">Talk to our advisors</h1>
            <p className="mt-5 text-slate-600">
              Complete this form and an AGIB representative will get in touch to guide your next
              step.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>Phone: +220 327 7777</li>
              <li>Email: info@agib.gm</li>
              <li>Hours: Mon-Fri, 08:00 - 17:00</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#0b3b7a] transition focus:ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#0b3b7a] transition focus:ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#0b3b7a] transition focus:ring"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[#0b3b7a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0e4c9d]"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </Container>
    </div>
  );
}
