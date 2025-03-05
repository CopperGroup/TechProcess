"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Auth from "./Auth"
import AdminLink from "./AdminLink"
import { TransitionLink } from "../interface/TransitionLink"
import { usePathname } from "next/navigation"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import BurgerMenu from "./BurgerMenu"
import { trackFacebookEvent } from "@/helpers/pixel"
import { Store } from "@/constants/store"
import { DiamondIcon } from "lucide-react"

const Links = [
  { label: "Головна", href: "/" },
  { label: "Каталог", href: "/catalog?page=1&sort=default" },
  { label: "Уподобані", href: "/liked" },
  { label: "Мої замовлення", href: "/myOrders" },
  { label: "Інформація", href: "/info" },
]

const infoNames = ["Контакти", "Доставка та оплата", "Гаратнія та сервіси"]

export default function Header({ email, user }: { email: string; user: string }) {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const isInView = useInView(headerRef, { once: true })

  const userInfo = JSON.parse(user)

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const handleLead = (label: string) => {
    trackFacebookEvent("Lead", {
      lead_type: label,
    })
  }

  return (
    <motion.header
      ref={headerRef}
      className="w-full min-w-[320px] h-24 flex justify-center items-center bg-gradient-to-r from-[#1A1A1A] to-[#2C2C2C]"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[1680px] h-full flex justify-between items-center px-5 max-[600px]:px-9 max-[500px]:px-7">
        <div className="size-5 hidden max-lg:flex"></div>
        <motion.div variants={linkVariants} transition={{ delay: 0.2 }}>
          <Link href="/" className="w-fit flex gap-2 justify-center items-center">
            <DiamondIcon className="w-6 h-6 text-[#C2AD8F]" />
            <p className="text-base-semibold text-[#E5D3B3] font-serif">{Store.name}</p>
          </Link>
        </motion.div>
        <nav className="w-fit h-12 flex gap-1 justify-center items-center rounded-full bg-[#1f1f1f]/50 backdrop-blur-sm px-2 max-lg:hidden">
          <AdminLink />
          {Links.map(({ label, href }, index) => {
            const isActive = (href.includes(pathname) && pathname.length > 1) || pathname === href

            if (["Уподобані", "Мої замовлення"].includes(label)) {
              if (!email) return null

              return (
                <motion.div key={label} variants={linkVariants} transition={{ delay: 0.2 + index * 0.1 }}>
                  <div
                    className={`w-fit h-9 text-[#C2AD8F] flex justify-center items-center border-[#C2AD8F] rounded-full px-4 ${isActive ? "bg-[#C2AD8F]/10 text-[#E5D3B3] border" : "hover:bg-[#C2AD8F]/5"} transition-all duration-300`}
                  >
                    <TransitionLink
                      href={`${href}${label === "Уподобані" ? "/" + userInfo?._id : ""}`}
                      className={`text-small-medium font-normal transition-all ${isActive ? "text-[#E5D3B3]" : "text-[#C2AD8F] hover:text-[#E5D3B3]"}`}
                      onClick={() => handleLead(label)}
                    >
                      {label}
                    </TransitionLink>
                  </div>
                </motion.div>
              )
            } else if (label === "Інформація") {
              return (
                <motion.div key={label} variants={linkVariants} transition={{ delay: 0.2 + index * 0.1 }}>
                  <Menubar className="h-9 border-0 p-0 space-x-0 bg-transparent">
                    <MenubarMenu>
                      <MenubarTrigger
                        className={`w-fit h-9 text-[#C2AD8F] flex justify-center items-center border-[#C2AD8F] rounded-full cursor-pointer px-4 ${isActive ? "bg-[#C2AD8F]/10 text-[#E5D3B3] border" : "hover:bg-[#C2AD8F]/5"} transition-all duration-300`}
                      >
                        <p
                          className={`text-small-medium font-normal transition-all ${isActive ? "text-[#E5D3B3]" : "text-[#C2AD8F] hover:text-[#E5D3B3]"}`}
                        >
                          {label}
                        </p>
                      </MenubarTrigger>
                      <MenubarContent className="min-w-[9rem] bg-[#1f1f1f] text-[#C2AD8F] border border-[#C2AD8F]/20 rounded-2xl">
                        {["contacts", "delivery-payment", "warranty-services"].map((subItem, index) => (
                          <MenubarItem
                            key={subItem}
                            className="text-small-medium font-normal cursor-pointer hover:text-[#E5D3B3] hover:bg-[#C2AD8F]/10 transition-all duration-300 rounded-lg"
                          >
                            <TransitionLink href={`/info/${subItem}`} onClick={() => handleLead(`/info/${subItem}`)}>
                              {infoNames[index]
                                .split("-")
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(" ")}
                            </TransitionLink>
                          </MenubarItem>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </motion.div>
              )
            } else {
              return (
                <motion.div key={label} variants={linkVariants} transition={{ delay: 0.2 + index * 0.1 }}>
                  <div
                    className={`w-fit h-9 text-[#C2AD8F] flex justify-center items-center border-[#C2AD8F] rounded-full px-4 ${isActive ? "bg-[#C2AD8F]/10 text-[#E5D3B3] border" : "hover:bg-[#C2AD8F]/5"} transition-all duration-300`}
                  >
                    <TransitionLink
                      href={href}
                      className={`text-small-medium font-normal transition-all ${isActive ? "text-[#E5D3B3]" : "text-[#C2AD8F] hover:text-[#E5D3B3]"}`}
                    >
                      {label}
                    </TransitionLink>
                  </div>
                </motion.div>
              )
            }
          })}
        </nav>
        <motion.div
          className="w-fit flex justify-center items-center max-lg:hidden"
          variants={linkVariants}
          transition={{ delay: 0.6 }}
        >
          <Auth email={email} user={user} />
        </motion.div>
        <motion.div className="w-fit h-9 hidden mt-1 max-lg:flex" variants={linkVariants} transition={{ delay: 0.6 }}>
          <BurgerMenu email={email} user={user} />
        </motion.div>
      </div>
    </motion.header>
  )
}

