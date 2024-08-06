import '../assets/styles/tailwind.css'
import '../assets/styles/style.css'

import type React from 'react'
import logoUrl from '../assets/images/logo.svg'
import { Link } from '../components/Link'

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className='m-auto flex max-w-5xl'>
      <Sidebar>
        <Logo />
        <Link href='/'>Welcome</Link>
        <Link href='/todo'>Todo</Link>
        <Link href='/star-wars'>Data Fetching</Link>
      </Sidebar>
      <Content>{children}</Content>
    </div>
  )
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id='sidebar' className='flex shrink-0 flex-col border-r-2 border-r-gray-200 p-5'>
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id='page-container'>
      <div id='page-content' className='min-h-screen p-5 pb-12'>
        {children}
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div className='mb-2 p-5'>
      <a href='/'>
        <img src={logoUrl} height={64} width={64} alt='logo' />
      </a>
    </div>
  )
}
