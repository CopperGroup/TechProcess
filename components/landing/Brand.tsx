"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Leaf, Heart, Zap, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { IoDiamondOutline } from "react-icons/io5"

const brandValues = [
  {
    icon: Leaf,
    title: "Сталий розвиток",
    description:
      "Ми використовуємо екологічно чисті матеріали та етичні методи виробництва, щоб мінімізувати вплив на довкілля.",
  },
  {
    icon: Heart,
    title: "Якість і комфорт",
    description:
      "Наші вироби створені з увагою до деталей, забезпечуючи неперевершену якість та комфорт у повсякденному житті.",
  },
  {
    icon: Zap,
    title: "Інноваційний підхід",
    description:
      "Ми поєднуємо сучасний дизайн із функціональністю, створюючи стильні та практичні рішення для вашого гардеробу.",
  },
]

export default function Brand() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white px-4 py-20 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-heading2-bold md:text-heading1-semibold leading-tight tracking-tight text-black mb-6">
            Наші принципи
          </h2>
          <p className="text-body-normal text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Ми створюємо більше, ніж просто одяг — це стиль життя, що поєднує естетику, комфорт та відповідальний підхід.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {brandValues.map((value, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-[#E5D3B3] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <value.icon className="w-8 h-8 text-black" />
              </motion.div>
              <div className="pt-6">
                <h3 className="font-serif text-heading3-bold mb-4 text-black">{value.title}</h3>
                <p className="text-base-regular text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lg" className="group relative px-6 py-3 bg-transparent hover:bg-transparent">
            <span className="relative z-10 text-black text-base-semibold tracking-wide group-hover:text-white">
              Дізнатися більше
            </span>
            <span className="absolute inset-0 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 origin-left"></span>
            <span className="absolute inset-0 border border-black"></span>
            <ChevronRight className="relative h-5 w-5 inline-block text-black z-[2] ml-2 group-hover:text-white" />
          </Button>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-20 bg-black p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <blockquote className="italic text-body1-bold text-[#E5D3B3] text-center">
            &quot;Їхні вироби поєднують у собі елегантність, якість та інноваційність. Кожна річ стає особливою частиною мого гардеробу.&quot;
          </blockquote>
          <p className="mt-4 text-center text-base-regular text-white">- Марія К., Постійна клієнтка</p>
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
          className="absolute top-1/3 -right-8 w-12 h-12"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <IoDiamondOutline className="w-full h-full text-[#C2AD8F] opacity-40" />
        </motion.div>
      </div>
    </section>
  )
}
