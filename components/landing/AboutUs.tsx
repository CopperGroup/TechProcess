"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Users, Globe } from "lucide-react"
import Image from "next/image"
import { IoDiamondOutline } from "react-icons/io5";

export default function LuxuryAboutUsSection() {
  const stats = [
    { icon: Award, label: "Нагороди", value: "50+" },
    { icon: Users, label: "Щасливі клієнти", value: "10k+" },
    { icon: Globe, label: "Країни", value: "30+" },
  ]

  return (
    <section className="relative bg-white px-4 py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/about-us.jpg"
                alt="Elegant jewelry craftsmanship"
                width={480}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-[#E5D3B3] font-serif text-body-semibold text-center">
                Est.
                <br />
                1990
              </p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-[#E5D3B3] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <IoDiamondOutline className="w-12 h-12 mt-1"/>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-heading2-bold md:text-heading1-semibold leading-tight tracking-tight text-black">
              Створення елегантності з 1990 року
            </h2>
            <p className="text-body-normal text-gray-600 leading-relaxed">
              Протягом трьох десятиліть ми присвятили себе створенню вишуканих ювелірних виробів, 
              які відображають сутність краси та елегантності. Наша пристрасть до майстерності та увага 
              до деталей зробили нас надійним ім&apos;ям у світі розкішних аксесуарів.
            </p>
            <p className="text-body-normal text-gray-600 leading-relaxed">
              Кожен виріб у нашій колекції є свідченням нашої відданості якості та досконалості дизайну. 
              Ми використовуємо лише найкращі матеріали та працюємо з кваліфікованими майстрами, щоб втілити наші ідеї в 
              реальність.
            </p>
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#C2AD8F]" />
                  <p className="text-heading3-bold text-black">{stat.value}</p>
                  <p className="text-small-regular text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <Button size="lg" className="group relative px-6 py-3 bg-transparent hover:bg-transparent">
              <span className="relative z-10 text-black text-base-semibold tracking-wide group-hover:text-white">
                Наша історія
              </span>
              <span className="absolute inset-0 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 origin-left"></span>
              <span className="absolute inset-0 border border-black"></span>
              <ChevronRight className="relative h-5 w-5 inline-block text-black z-[2] ml-2 group-hover:text-white" />
            </Button>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 bg-black p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <blockquote className="italic text-body1-bold text-[#E5D3B3] text-center">
          &quot;Їхня увага до деталей та відданість якості не мають рівних. 
          Кожен виріб, який я придбала, став цінною частиною моєї колекції.&quot;
          </blockquote>
          <p className="mt-4 text-center text-base-regular text-white">- Сара Дж., Вірний клієнт</p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-12 right-4 w-24 h-24 border-4 border-dashed border-[#C2AD8F] rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-12 left-4 w-32 h-32 border-4 border-dashed border-[#C2AD8F] rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/4 -left-8 w-12 h-12"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#C2AD8F] opacity-40">
            <path fill="currentColor" d="M12,2.6L9,9H2L7,13.4L5,20L12,16.6L19,20L17,13.4L22,9H15L12,2.6Z" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

