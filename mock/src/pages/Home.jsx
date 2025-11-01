import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Sections</h2>
        <p className="text-lg text-gray-700">Add more content here below the hero</p>
      </section>
    </div>
  )
}
