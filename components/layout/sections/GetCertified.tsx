'use client'

import { BadgeCheck, ArrowRight } from 'lucide-react'
import Image from 'next/image' // Place your image in public/ or use an external URL

export default function GetCertified() {
  return (
    <section className="py-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Get <span className="text-blue-600">Certified</span>.
          </h2>

          <div className="flex items-start gap-3">
            <BadgeCheck className="text-blue-600 mt-1" />
            <div>
              <p className="font-semibold">Start today</p>
              <p className="text-sm text-muted-foreground">
                You are just months away from cracking your dream company.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BadgeCheck className="text-blue-600 mt-1" />
            <div>
              <p className="font-semibold">Believe in yourself</p>
              <p className="text-sm text-muted-foreground">
                Coding is simple. You just need the right guidance. Consistency & hard work will help
                you be Internship/Placement ready for Tech companies.
              </p>
            </div>
          </div>

          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-orange-600 transition w-fit mt-4">
            Enroll Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-semibold mb-2 uppercase">Start your placement journey today.</p>
          <div className="max-w-md w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ce.jpeg"
              width={180}
              height={100}
              alt="Certificate of Completion"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
