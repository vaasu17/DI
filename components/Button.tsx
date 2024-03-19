import Image from 'next/image';
import React from 'react'

type ButtonProps ={
  type: 'button' |'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green';
  href: string
}

const Button = ({ type, title, icon, variant, href } : ButtonProps) => {
  return (
    <a href= {href} >
    <button
    className={`rounded-full flex flex-row justify-center items-center gap-3 border px-6 py-4 bg-green-600 text-white transition-all hover:bg-green-700 `}
    type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <h1 className ="bold-19 whitespace-nowrap h-full">{title}</h1>
    </button>
    </a>
  )
}

export default Button