'use client'

import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

export default function GameDemo(props: { onGameFullscreen: (newFullscreen: boolean) => void }) {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    dataUrl: 'scalar/Scalar.data',
    frameworkUrl: 'scalar/Scalar.framework.js',
    loaderUrl: 'scalar/Scalar.loader.js',
    codeUrl: 'scalar/Scalar.wasm',
  })

  const [fullscreen, setFullscreen] = useState(false)

  const changeFullscreen = (callback: (previous: boolean) => boolean) => {
    const newFullscreen = callback(fullscreen)
    props.onGameFullscreen(newFullscreen)
    setFullscreen(newFullscreen)
  }

  return (
    <div
      className={`group flex items-center justify-center ${
        fullscreen
          ? 'fixed bottom-0 left-0 right-0 top-0'
          : 'relative aspect-video w-full rounded-lg border'
      }`}
    >
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        className={`${isLoaded ? 'block' : 'hidden'}  h-full w-full rounded-lg`}
      />
      <div className='absolute bottom-2 right-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md opacity-10 transition-opacity duration-500 [background-image:radial-gradient(circle_closest-side,#0003,#fff0)] group-hover:opacity-100'>
        <FontAwesomeIcon
          icon={fullscreen ? faMinimize : faMaximize}
          className='h-8 w-8'
          onClick={() => changeFullscreen(prev => !prev)}
        />
      </div>
    </div>
  )
}
