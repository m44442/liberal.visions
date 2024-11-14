'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { useRouter, usePathname } from 'next/navigation';

interface MobileState {
    height: number;
    width: number;
}

const navigationMenu = [
    {
        href:'#Top',
        label: 'Top'
    },
    {
        href:'#Events',
        label: 'Events'
    },
    {
        href:'#Projects',
        label: 'Projects'
    },
    {
        href:'#Member',
        label: 'Member'
    },
    {
        href:'#Recruitement',
        label: 'Recruitement'
    }
]

function Navigation() {
    const [navOpen, setNavOpen] = useState<boolean>(false)
    const mobileMenuHandler = () => {
        setNavOpen(!navOpen)
    }

    //768pxになるとモバイルメニューを閉じる
    const[mobile, setMobile] = useState<MobileState>({
        height: 0,
        width: 0
    })
    useEffect(()=>{
        function handleResize(){
            setMobile({
                height: window.innerHeight,
                width: window.innerWidth
            })
            if (mobile.width > 768 && navOpen){
                setNavOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
         // #で始まるリンクの処理
    if (href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
            // 現在のURLのハッシュを更新
            window.history.pushState({}, '', href);
            // スムーズスクロール
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else if (pathname !== '/') {
            // 要素が見つからない場合はトップページに遷移
            router.push('/' + href);
        }
    } else {
        // 通常のページ遷移
        router.push(href);
    }
    };

  return (
    <>
    {/*webメニュー*/}
    <header className='py-7 fixed w-full z-50 bg-transparent'>
        <div className='container px-4 mx-auto'>
            <div className='flex justify-between items-center'>
            {/*ロゴ*/}
            <div>
                <Link href={"/"}>
                <Image src={'/images/Logo_Header.png'} alt="ロゴ" width={90} height={90} />

                </Link>
            </div>
            {/*メニュー*/}
            <div className='hidden lg:block text-center antialiased font-normal text-xl'>
                <ul className='flex space-x-7'>
                    {navigationMenu.map((item, index) => (
                        <li key={index} className='text-body'>
                        <Link 
                            href={item.href} 
                            className='duration-300 transition-all ease-in-out hover:text-white hover:-top-1 relative top-0'
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </Link>
                    </li> 
                    ))}
                   
                </ul>
            </div>
            {/*ボタン*/}
            <div>
                {/*モバイル用*/}
                <button type='button' className='block lg:hidden' onClick={mobileMenuHandler} aria-label="Open menu">
                    <FaBars className='text-4xl'/>
                </button>
            </div>
            </div>
        </div>
    </header>

    {/*モバイルメニュー*/}
    <div className={navOpen ? "py-0 block w-screen z-[999]": 'hidden'}>
        <div className='h-screen w-screen z-[999] top-0 fixed bg-black
        bg-opacity-50'>
            <div className='h-screen bg-slate-200 w-[380px] top-0 right-0 
            z-[999] fixed'
            onClick={mobileMenuHandler}>
                <div className='h-14 px-10 border-b flex items-center'>
                    <button className='flex items-center space-x-3'
                    onClick={mobileMenuHandler}
                    >
                    <IoClose />
                    <span>CLOSE</span>
                    </button>
                </div>
                <div className='h-full py-3 px-10 pb20 bg-gradient-to-tl'>
                    <ul className='block mb-7'>
                        {navigationMenu.map((item, index) => (
                        <li key={index}>
                        <Link href={item.href} className='group flex
                        items-center py-3 duration-300 transition-all
                        ease-in-out hover:text-white font-light text-3xl'
                        onClick={()=>setNavOpen(false)}>
                        <span>{item.label}</span>
                        <span className='relative left-2 duration-300 
                        transition-all ease-in-out opacity-0
                        group-hover:opacity-100 group-hover:left-3'>
                            <MdChevronRight className='text-xl'/>
                        </span>
                        </Link>
                        </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navigation