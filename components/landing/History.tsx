"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Store } from "@/constants/store"

const milestones = [
  { year: 2010, event: `Заснування ${Store.name}` },
  { year: 2013, event: "Відкриття першого фізичного магазину" },
  { year: 2016, event: "Запуск лінії еко-френдлі одягу" },
  { year: 2019, event: "Розширення на міжнародний ринок" },
  { year: 2022, event: "Відкриття флагманського магазину в Києві" },
]

export default function History() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-24 bg-gradient-to-b from-[#1A1A1A] to-[#2C2C2C] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#C2AD8F] to-transparent opacity-30"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>

        <motion.h2
          className="text-heading1-bold mb-16 text-center font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Наша Історія
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#1A1A1A] border border-[#C2AD8F] flex items-center justify-center overflow-hidden">
                    <span className="text-heading3-bold text-[#C2AD8F] font-serif">{milestone.year}</span>
                  </div>
                  <motion.div
                    className="absolute -right-1 -top-1 w-6 h-6 bg-[#E5D3B3] rounded-full"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
                <div>
                  <p className="text-base-semibold text-[#E5D3B3]">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative aspect-[4/5] md:aspect-[1/1]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="absolute inset-0 border-2 border-[#C2AD8F] rounded-sm transform rotate-3"></div>
            <Image
              src="/assets/history-image.jpg"
              alt={`${Store.name} through the years`}
              layout="fill"
              objectFit="cover"
              className="rounded-sm transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C2AD8F] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="text-black font-serif text-body-semibold text-center">
                {new Date().getFullYear() - 2010}
                <br />
                років
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-body-normal text-[#E5D3B3] italic max-w-2xl mx-auto">
          &quot;Кожен рік нашої історії — це крок до досконалості у світі моди та стилю. Ми пишаємося нашим минулим і з
            оптимізмом дивимося в майбутнє.&quot;
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

