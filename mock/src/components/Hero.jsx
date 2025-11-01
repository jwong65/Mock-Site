export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Hero content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Content text
        </p>
        <a
          href="#"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
