import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <div className='.p-80 relative flex w-full flex-col lg:h-[calc(100dvh-4rem)] lg:flex-row lg:items-center lg:justify-around'>
      <div className='flex h-[50dvh] items-center justify-center bg-gray-800 lg:bg-transparent'>
        <div>
          <h1 className='text-2xl tracking-wider'>Insect Dev</h1>
          <h2 className='text-md'>Small insects, big worlds</h2>
        </div>
      </div>

      <div className='flex w-1/3 items-center'>
        <div className='group relative hidden aspect-video w-full items-center justify-center rounded-lg border lg:flex'>
          Insert WebGL Demo Here
          <div className='absolute bottom-2 right-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md opacity-10 transition-opacity duration-500 group-hover:opacity-100'>
            <FontAwesomeIcon icon={faExpand} className='h-8 w-8' />
          </div>
        </div>
      </div>
    </div>
  )
}
