import Hero from "../components/Hero"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      <section className="py-16 text-center max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Featured Sections</h2>
        <p className="text-lg text-gray-700">
          Remove Content
        </p>
      </section>
    </main>
  )
}
