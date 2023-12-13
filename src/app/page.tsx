'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero'

export default function Home() {
  const [hideNavbar, setHideNavbar] = useState(false)

  return (
    <main>
      <Hero onGameFullscreen={newFullscreen => setHideNavbar(newFullscreen)} />
      <Navbar hide={hideNavbar} />
      <div className='mt-8 min-h-[100dvh]'>
        <section>
          <h2>Who are we</h2>
          <p>
            Insect Dev is a indie game dev studio and we're making our first
            game right now.
          </p>
        </section>
      </div>
    </main>
  )
}
