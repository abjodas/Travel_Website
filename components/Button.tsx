import Image from 'next/image';
import React from 'react'

interface buttonProps {
    title: string;
    type: "button" | "submit";
    variant: string;
    icon?: string;
}

const Button = ({title, type, icon, variant}: buttonProps) => {
  return (
    <button
    className={`flexCenter gap-3  rounded-full border ${variant}`}
    type={type}
    >
        {icon && <Image src={icon} width={24} height={24} alt="Login" />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button