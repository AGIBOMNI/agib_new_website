import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { FooterLinkColumns } from "./footer-link-columns";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[#74bf51] pt-16 text-white">
      {/* Decorative background element */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <Container className="relative z-10 pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block rounded-md bg-white p-3">
              <Image
                src="/images/Agib_logo.png"
                alt="Agib Bank Ltd"
                width={180}
                height={54}
                className="h-auto w-[140px]"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              The first Islamic Bank in the Gambia, providing ethical and innovative financial solutions for over a decade.
            </p>
            <div className="flex gap-4">
              {[
                { href: "#", label: "Facebook", path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>, type: 'fill' },
                { href: "#", label: "Twitter", path: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>, type: 'fill' },
                { href: "#", label: "Instagram", path: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>, type: 'stroke' },
                { href: "#", label: "LinkedIn", path: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>, type: 'fill' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-all duration-200 hover:border-white hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={item.type === 'fill' ? "currentColor" : "none"}
                    stroke={item.type === 'stroke' ? "currentColor" : "none"}
                    strokeWidth={item.type === 'stroke' ? "2" : "0"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110"
                  >
                    {item.path}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <FooterLinkColumns />
        </div>

        {/* Contact Strip */}
        <div className="mt-16 grid gap-6 rounded-2xl border border-white/20 bg-white/10 p-8 md:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-white/60">Call Us</p>
              <p className="text-sm font-bold text-white">+220 327 7777</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-white/60">Email Us</p>
              <p className="text-sm font-bold text-white">info@agib.gm</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-white/60">Visit Us</p>
              <p className="text-sm font-bold text-white">19 Kairaba Avenue, The Gambia</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-[#5aac40] py-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/70">
              © {new Date().getFullYear()} AGIB Bank Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/70">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
