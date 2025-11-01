import React from 'react'

export default function Hero() {
  return (
  <section className="relative w-full h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome</h1>
    <p className="text-lg md:text-2xl mb-6">Centered hero content</p>
    <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
      Get Started
    </a>
  </div>
</section>
  )
}
