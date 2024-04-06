import React from 'react'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

interface mobnavlinksProps {
    handleShow: (show: boolean) => void;
}

const MobNavLinks = ({handleShow}: mobnavlinksProps) => {
  return (
    <div onClick={() => {handleShow(false)}} className='absolute top-0 right-0 border-2 flex flex-col lg:hidden p-6 rounded-md'>
        {NAV_LINKS.map(link => (
            <Link className='text-gray-500 hover:text-black hover:font-bold' href={link.href} key={link.key}>
                {link.label}
            </Link>
        ))}

    </div>
  )
}

export default MobNavLinks