"use client";

import { ArrowRight } from "lucide-react";
import { ComingSoonLink } from "@/components/ui/coming-soon-link";

const navigateLinks = [
  { label: "Home Page" },
  { label: "Careers" },
  { label: "News" },
  { label: "Contact" },
];

const companyLinks = [
  { label: "Services" },
  { label: "About Us" },
  { label: "Branches & Agencies" },
  { label: "History" },
];

const resourceLinks = [
  { label: "Mobile App" },
  { label: "Online Banking" },
  { label: "Personal Account" },
  { label: "Corporate Account" },
];

const columns = [
  { title: "Navigate", links: navigateLinks },
  { title: "Company", links: companyLinks },
  { title: "Resources", links: resourceLinks },
];

export function FooterLinkColumns() {
  return (
    <>
      {columns.map((column) => (
        <div key={column.title}>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white/90">
            {column.title}
          </h4>
          <ul className="space-y-4">
            {column.links.map((link) => (
              <li key={link.label}>
                <ComingSoonLink className="group flex w-full items-center text-left text-sm text-white/80 transition-all hover:text-white">
                  <ArrowRight
                    size={12}
                    className="mr-0 opacity-0 transition-all group-hover:mr-2 group-hover:opacity-100"
                  />
                  {link.label}
                </ComingSoonLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
