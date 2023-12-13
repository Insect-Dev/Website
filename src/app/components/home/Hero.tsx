import { MutableRefObject } from 'react'
import Navbar from '../Navbar'
import GameDemo from './GameDemo'

export default function Hero(props: {
  onGameFullscreen: (newFullscreen: boolean) => void
}) {
  return (
    <div className='.p-80 relative flex w-full flex-col lg:h-[calc(100dvh-4rem)] lg:flex-row lg:items-center lg:justify-around'>
      <div className='flex h-[50dvh] items-center justify-center bg-gray-800 lg:bg-transparent'>
        <div>
          <h1 className='text-2xl tracking-wider'>Insect Dev</h1>
          <h2 className='text-md'>Small insects, big worlds</h2>
        </div>
      </div>

      <div className='flex w-1/3 items-center'>
        <GameDemo onGameFullscreen={props.onGameFullscreen} />
      </div>
    </div>
  )
}
