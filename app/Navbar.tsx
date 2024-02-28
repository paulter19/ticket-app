"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import classNames  from 'classnames'

const Navbar = () => {

  const currentPath = usePathname();
  console.log("cp: ", currentPath)
  const links = [
    {label: 'Dashboards', href:'/'},
    {label: 'Issues', href:'/issues'},
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/" >Home</Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link 
                    key={link.label} 
                    className={classNames({
                        'text-zinc-900': link.href === currentPath,
                        'text-zinc-500': link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors': true
                    })} 
                    href={link.href}>
                        {link.label}
                </Link>
            )}
        </ul>
    </nav>
  )
}

export default Navbar