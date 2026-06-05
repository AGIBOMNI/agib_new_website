"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Phone, Smartphone, MapPin, HelpCircle, Menu, X, Home, Users, Briefcase, Landmark, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComingSoonLink } from "@/components/ui/coming-soon-link"
import { Container } from "./container"
import { motion } from "framer-motion"

const topNavItems = [
  {
    label: "Personal",
    href: "https://omnimax.agib.gm/omni_web_portal/#/omni",
    external: true,
  },
  {
    label: "Corporate",
    href: "https://omnimax.agib.gm/omni_corporate_web_portal/#/omni",
    external: true,
  },
  { label: "Explore", href: "/explore", comingSoon: true },
]

const utilityItems = [
  { label: "Help & Support", href: "/help", icon: HelpCircle, comingSoon: true },
  { label: "Mobile App", href: "/mobile-app", icon: Smartphone, comingSoon: true },
  { label: "Find an ATM", href: "/find-atm", icon: MapPin, comingSoon: true },
]

const mainNavItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Who we are", href: "/who-we-are", icon: Users, comingSoon: true },
  { label: "Our Services", href: "/our-services", icon: Briefcase, comingSoon: true },
  { label: "Online Banking", href: "/online-banking", icon: Landmark, comingSoon: true },
  { label: "Forms", href: "/forms", icon: FileText, comingSoon: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full sticky top-0 z-50"
    >
      {/* Top Utility Bar */}
      <div className="top-utility-bar border-b border-[#5da63e] bg-[#67b748] text-white">
        <Container>
          <div className="flex items-center justify-between">
            {/* Left - Personal/Corporate/Explore tabs */}
            <nav className="flex">
              {topNavItems.map((item) => {
                const isActive = !item.external && pathname === item.href
                const linkClassName = `relative px-4 py-3 text-sm font-medium !text-white transition-colors ${
                  isActive
                    ? "before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:bg-white"
                    : "opacity-90 hover:opacity-100"
                }`

                if (item.external) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                    >
                      {item.label}
                    </a>
                  )
                }

                if (item.comingSoon) {
                  return (
                    <ComingSoonLink key={item.label} className={linkClassName}>
                      {item.label}
                    </ComingSoonLink>
                  )
                }

                return (
                  <Link key={item.label} href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right - Utility links */}
            <nav className="hidden items-center gap-6 md:flex">
              {utilityItems.map((item) => (
                <ComingSoonLink
                  key={item.label}
                  className="flex items-center gap-2 text-sm !text-white opacity-90 transition-opacity hover:opacity-100"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-white" />
                  {item.label}
                </ComingSoonLink>
              ))}
            </nav>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-slate-200 bg-white">
        <Container>
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Agib_logo.png"
                alt="Agib Bank Ltd - Your Investment Partner"
                width={240}
                height={72}
                className="h-12 w-auto md:h-14"
                priority
              />
            </Link>

            {/* Main Navigation - Desktop */}
            <nav className="hidden items-center gap-8 lg:flex">
              {mainNavItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname === item.href
                const linkClassName = `text-base transition-colors ${
                  isActive
                    ? "font-bold"
                    : "font-medium text-slate-900 hover:text-[#4CAF50]"
                }`

                if (item.comingSoon) {
                  return (
                    <ComingSoonLink
                      key={item.label}
                      className={`${linkClassName} cursor-pointer`}
                    >
                      {item.label}
                    </ComingSoonLink>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{ color: isActive ? "#4CAF50" : undefined }}
                    className={linkClassName}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Contact Button - Desktop */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="rounded-full bg-[#4CAF50] px-6 py-2 text-white hover:bg-[#43A047]">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-slate-200 bg-white lg:hidden overflow-hidden"
          >
            <Container className="py-4">
              {/* Utility Links - Mobile */}
              <div className="mb-4 flex flex-col gap-3 border-b border-slate-200 pb-4">
                {utilityItems.map((item) => (
                  <ComingSoonLink
                    key={item.label}
                    className="flex w-full items-center gap-2 text-left text-sm text-slate-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4 text-[#4CAF50]" />
                    {item.label}
                  </ComingSoonLink>
                ))}
              </div>

              {/* Main Nav - Mobile */}
              <nav className="flex flex-col gap-3">
                {mainNavItems.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname === item.href
                  const linkClassName = `flex items-center gap-3 text-base transition-colors ${
                    isActive
                      ? "font-bold"
                      : "font-medium text-slate-900"
                  }`

                  if (item.comingSoon) {
                    return (
                      <ComingSoonLink
                        key={item.label}
                        className={`${linkClassName} w-full text-left`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5 text-[#94a3b8]" />
                        {item.label}
                      </ComingSoonLink>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{ color: isActive ? "#4CAF50" : undefined }}
                      className={linkClassName}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon
                        className="h-5 w-5"
                        style={{ color: isActive ? "#4CAF50" : "#94a3b8" }}
                      />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>

              {/* Contact Button - Mobile */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full bg-[#4CAF50] text-white hover:bg-[#43A047]">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
