"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Transition } from "@headlessui/react"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { TransitionLink } from "../interface/TransitionLink"
import AdminLink from "./AdminLink"
import Auth from "./Auth"
import { motion } from "framer-motion"

export default function BurgerMenu({ email, user }: { email: string; user: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const userInfo = JSON.parse(user)

  const Links = [
    { label: "Головна", href: "/" },
    { label: "Каталог", href: "/catalog?page=1&sort=default" },
    { label: "Уподобані", href: `/liked/${userInfo?._id}` },
    { label: "Мої замовлення", href: "/myOrders" },
    { label: "Контакти", href: "/info/contacts" },
    { label: "Доставка та оплата", href: "/info/delivery-payment" },
    { label: "Гарантія та сервіси", href: "/info/warranty-services" },
    { label: "Презентації", href: "/info/presentations" },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#C2AD8F] focus:outline-none relative w-8 h-8 z-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2.5"}`}
        />
        <span
          className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2.5"}`}
        />
      </button>

      <Transition show={isOpen}>
        <motion.div
          className="fixed inset-x-0 top-20 bottom-0 bg-gradient-to-b from-[#1A1A1A] to-[#2C2C2C] z-[9999] overflow-hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="h-full overflow-y-auto py-8 px-6 flex flex-col items-center">
            <nav className="flex flex-col items-center space-y-6 w-full">
              <AdminLink
                className="pt-2 hover:bg-transparent hover:text-[#E5D3B3]"
                linkDecoration="text-base-regular"
              />
              {Links.map(({ label, href }, index) => {
                const isActive = (href.includes(pathname) && href.length > 1) || pathname === href

                if (["Уподобані", "Мої замовлення"].includes(label) && !email) {
                  return null
                }

                if (label === "Інформація") {
                  return (
                    <Menubar key={label} className="border-0 p-0 w-full bg-transparent">
                      <MenubarMenu>
                        <MenubarTrigger className="w-full flex justify-center items-center text-[#C2AD8F] hover:text-[#E5D3B3] focus:text-[#E5D3B3] bg-transparent">
                          <span className={`text-center text-base-semibold ${isActive ? "text-[#E5D3B3]" : ""}`}>
                            {label}
                          </span>
                        </MenubarTrigger>
                        <MenubarContent className="bg-[#1f1f1f] text-[#C2AD8F] border border-[#C2AD8F]/20 rounded-2xl">
                          {["Контакти", "Доставка та оплата", "Гарантія та сервіси", "Презентації"].map(
                            (subItem, subIndex) => (
                              <MenubarItem key={subItem} className="focus:bg-[#C2AD8F]/10">
                                <TransitionLink
                                  href={`/info/${["contacts", "delivery-payment", "warranty-services", "presentations"][subIndex]}`}
                                  className="block py-3 w-full text-center text-small-medium hover:text-[#E5D3B3] transition-colors duration-200"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem}
                                </TransitionLink>
                              </MenubarItem>
                            ),
                          )}
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  )
                }

                return (
                  <TransitionLink
                    key={label}
                    href={href}
                    className={`text-[#C2AD8F] ${isActive ? "text-[#E5D3B3]" : ""} w-full text-center text-base-semibold hover:text-[#E5D3B3] transition-colors duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </TransitionLink>
                )
              })}
            </nav>
            <div className="mt-8 w-full flex justify-center items-center">
              <div className="inline-block">
                <Auth email={email} user={user} />
              </div>
            </div>
          </div>
        </motion.div>
      </Transition>
    </div>
  )
}

