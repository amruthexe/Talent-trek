"use client";

import { Play } from "lucide-react"; // Play icon from Lucide
import { useState } from "react"; // State to control video visibility
import { Button } from "@/components/ui/button"; // Import the Button component from ui folder
import Link from "next/link"; 

export default function WebDevPromo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false); // State to control video visibility

  const handleVideoClick = () => {
    setIsVideoOpen(true); // Open the video when clicked
  };

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side (Course Info) */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Generative AI Foundations
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Apply new AI skills the very next day!
          </h2>
          
          {/* Course Details */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <p className="text-lg text-gray-700">
              Joint Completion Certification from upGrad and Microsoft
            </p>
            <p className="text-lg text-gray-700">
              Paid access to AI tools worth the course fee
            </p>
            <div className="flex items-center justify-center gap-2 text-xl">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">4.9/5</span>
            </div>
            <p className="text-md text-gray-700">
              Learn to use 15+ AI tools like a pro - MS Copilot, Azure AI, and more.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="w-5/6 sm:w-1/4 font-bold group/arrow mx-auto bg-black hover:bg-gray-800 text-white rounded-full px-24 py-3 transition duration-300"
            >
              <Link href="https://wa.me/919848814614?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Generative%20AI.">
                Start Learning at ₹499
                <Play className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 sm:w-1/4 font-bold mx-auto border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-3 transition duration-300"
            >
              <Link href="tel:+917892793203">Call Us</Link>
            </Button>
          </div>
        </div>

        {/* Right Side (Video Section) */}
        <div className="relative w-full lg:w-1/2">
          <div
            onClick={handleVideoClick}
            className="cursor-pointer relative w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden"
          >
            {/* Video Thumbnail */}
            <img
              src="/html.jpeg" // Using the thumbnail from the public folder
              alt="Demo Video"
              className="w-full h-full object-cover"
            />
            {/* Play Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded-full">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Conditional Video Player */}
          {isVideoOpen && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
              <div className="relative w-full max-w-4xl h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  controls
                  autoPlay
                >
                  <source src="/html.mp4" type="video/mp4" /> {/* Using the video from the public folder */}
                  Your browser does not support the video tag.
                </video>
                <button
                  className="absolute top-2 right-2 text-white text-xl"
                  onClick={() => setIsVideoOpen(false)} // Close the video player
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
