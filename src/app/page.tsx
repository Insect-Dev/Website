import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-12 px-[30%] bg-white dark:bg-zinc-900 dark:text-white text-justify">
      <div className="fixed top-0 flex items-center justify-between h-16 w-full bg-gray-100 dark:bg-zinc-950 p-5 backdrop-blur-[2px] navbar">
        <h1 className="text-lg">Ant Studios</h1>
        <div className="w-1/4 flex items-center justify-between menu">
          <span>About</span>
          <span>Our Games</span>
          <span>Contact</span>
        </div>
      </div>

      {/* <div className="bg-red-500 w-3/6 h-48 rounded-lg hover:w-2/6 resize hover:skew-x-6 transition-all ease-in-out duration-50">

      </div> */}
    </main>
  )
}
