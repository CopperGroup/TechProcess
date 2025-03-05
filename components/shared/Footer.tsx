"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Store } from "@/constants/store"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] text-[#E5D3B3] z-40 pt-16 pb-8 w-full min-w-[320px]">
      <motion.div
        className="max-w-screen-2xl mx-auto px-4 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4 text-[#C2AD8F]">Фіз. особам</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="info/contacts"
                  className="text-base-regular hover:text-[#E5D3B3] transition-colors duration-300"
                >
                  Контакти
                </Link>
              </li>
              <li>
                <Link
                  href="info/delivery-payment"
                  className="text-base-regular hover:text-[#E5D3B3] transition-colors duration-300"
                >
                  Доставка та оплата
                </Link>
              </li>
              <li>
                <Link
                  href="info/warranty-services"
                  className="text-base-regular hover:text-[#E5D3B3] transition-colors duration-300"
                >
                  Гарантія та сервіс
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4 text-[#C2AD8F]">Дизайн</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/presentations"
                  className="text-base-regular hover:text-[#E5D3B3] transition-colors duration-300"
                >
                  Презентації
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4 text-[#C2AD8F]">Каталоги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-base-regular hover:text-[#E5D3B3] transition-colors duration-300">
                  Кільця
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-base-regular hover:text-[#E5D3B3] transition-colors duration-300">
                  Браслети
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-base-regular hover:text-[#E5D3B3] transition-colors duration-300">
                  Діадеми
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4 text-[#C2AD8F]">Контакти</h3>
            <p className="text-base-regular mb-2">Phone:</p>
            <p className="text-base-regular mb-4">Email: </p>
            <h4 className="text-base-semibold mb-2 text-[#C2AD8F]">Ми в соцмережах</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#C2AD8F] hover:text-[#E5D3B3] transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#C2AD8F] hover:text-[#E5D3B3] transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#C2AD8F] hover:text-[#E5D3B3] transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-[#C2AD8F]/20 pt-8 mt-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-small-regular text-[#C2AD8F] mb-4 lg:mb-0 text-center lg:text-left">
              ©{currentYear}
              <span className="font-semibold"> {Store.name}</span>. Всі права захищені.
            </p>
            <div className="flex flex-col items-center lg:items-end space-y-2 lg:space-y-0">
              <span className="text-small-regular text-[#C2AD8F] text-center lg:text-right">Солодко</span>
              <div className="flex space-x-2 mt-2 lg:mt-1">
                <Image
                  className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  width={88}
                  height={18}
                  src="/assets/botticelli.png"
                  alt="Botticelli logo"
                />
                <Image
                  className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  width={55}
                  height={18}
                  src="/assets/juventa.png"
                  alt="Juventa logo"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

