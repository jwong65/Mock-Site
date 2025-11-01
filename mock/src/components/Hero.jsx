export default function Hero() {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gray-100 px-4 pt-24">
      {/* pt-24 ensures hero content is below the fixed navbar */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome</h1>
        <p className="text-xl md:text-2xl mb-6">
          This is the homepage hero content
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
