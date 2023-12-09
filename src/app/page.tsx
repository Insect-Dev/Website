import Navbar from './components/Navbar'
import Hero from './components/home/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <div className='mt-8 min-h-[100dvh]'>
        <section>
          <h2>Who are we</h2>
          <p>Insect Dev is a indie game dev studio and we're making our first game right now.</p>
        </section>
      </div>
    </main>
  )
}
