'use client'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsFillImageFill, BsCodeSlash, BsCameraVideoFill, BsFillFileEarmarkMusicFill } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai';

const poppins = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
    {
      label: 'Dashboard',
      icon:  LuLayoutDashboard,
      href: '/dashboard',
      color: "text-sky-500"
    },
    {
      label: 'Conversation',
      icon:  BiMessageSquareDetail,
      href: '/conversation',
      color: "text-violet-500",
    },
    {
      label: 'Image Generation',
      icon:  BsFillImageFill,
      color: "text-pink-700",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon:  BsCameraVideoFill,
      color: "text-orange-700",
      href: '/video',
    },
    {
      label: 'Music Generation',
      icon: BsFillFileEarmarkMusicFill,
      color: "text-emerald-500",
      href: '/music',
    },
    {
      label: 'Code Generation',
      icon: BsCodeSlash,
      color: "text-green-700",
      href: '/code',
    },
    {
      label: 'Settings',
      icon: AiFillSetting,
      href: '/settings',
    },
  ];

const Sidebar = () => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
        <div className='px-3 py-2 flex-1'>
            <Link href='/dashboard' className='flex items-center pl-3 mb-14' >
                <div className='relative h-8 w-8 mr-4'>
                    <Image 
                        src='/logo.png'
                        fill
                        alt='Logo'
                    />
                </div> 
                <h1 className={cn("text-2xl font-bold", poppins.className)}>
                    Genious
                </h1>
            </ Link>
            <div className='space-y-1'>
                {
                    routes.map((route) => (
                        <Link 
                            key={route.href}
                            href={route.href}
                            className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                            
                            )}
                        >
                            <div className='flex items-center flex-1'>
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar