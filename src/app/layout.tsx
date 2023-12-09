import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Insect Dev',
  description: 'Official Insect Dev Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='no-scrollbar'>
      <body
        className={`${inter.className} bg-gray-100 text-black dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  )
}
