"use client"
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { NAV_LINKS } from '@/constants'
import { Button } from '.'
import {useState} from "react";
import MobNavLinks from './MobNavLinks'


const Navbar = () => {
    const [show, handleShow] = useState(false);
  return (
    <nav className="flexBetween
    max-container padding-container relative z-30
    py-5">
        <Link href="/">
            <Image 
                src="/hilink-logo.svg"
                alt="Logo"
                width={74}
                height={29}
            />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map(link => (
                    <Link className="regular-16 text-gray-50
                    flexCenter cursor-pointer pb-1.5 hover:font-bold" href={link.href} key={link.key}>
                        {link.label}
                    </Link>
                ))}
            </ul>


            <div className="lg:flexCenter hidden">
                <Button title={"Login"} 
                type="button"
                icon="/user.svg"
                variant="btn_dark_green"
                />

            </div>

            {!show && <a onClick={() => handleShow(!show)} className="inline-block cursor-pointer lg:hidden">
            <Image src="/menu.svg" width={32} height={32} alt="menu" />
            </a> }
             
             {show && <MobNavLinks handleShow={handleShow} />}       
    </nav>
  )
}

export default Navbar