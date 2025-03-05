"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Store } from "@/constants/store"

export default function BannerHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Фонове зображення */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/banner-hero.jpg"
          alt="Колекція розкішних ювелірних виробів"
          fill
          className="object-cover"
          priority
        />
        {/* Градієнтний наклад для кращої видимості тексту */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="w-full max-w-[1680px] flex flex-col items-center px-4 sm:px-8 relative z-10">
        <motion.div
          className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-[#E5D3B3] font-serif text-heading2-bold sm:text-heading1-semibold tracking-wide leading-tight">
            {Store.name}
          </h1>
          <p className="text-[#E5E5E5] text-base-regular sm:text-body-medium max-w-2xl mx-auto leading-relaxed">
            Відкрийте для себе нашу вишукану колекцію ювелірних виробів, де вічна елегантність поєднується із сучасним дизайном.  
            Кожен виріб розповідає історію розкоші та майстерності.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="outline"
            className="bg-[#E5D3B3] text-[#1C1C1C] hover:bg-[#D4C2A2] text-base-medium px-6 sm:px-8 py-4 sm:py-6 rounded-none border-0 transition-colors duration-300 w-full sm:w-auto"
          >
            КУПИТИ ЗАРАЗ
          </Button>
          <Button
            variant="outline"
            className="text-base-medium bg-transparent text-[#E5D3B3] hover:bg-[#E5D3B3] hover:text-[#1C1C1C] px-6 sm:px-8 py-4 sm:py-6 rounded-none border border-[#E5D3B3] transition-colors duration-300 w-full sm:w-auto"
          >
            ДОСЛІДИТИ
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
