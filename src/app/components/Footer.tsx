'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { HiDatabase } from "react-icons/hi";
import { useRouter, usePathname } from 'next/navigation';

const footerContent = {
  text: {
    logo: "/images/Logo_Header.png",
  },
  footerLinks: [
    {
      heading: "サイトマップ",
      links: [
        {
          href: "#Top",
          label: "Top",
        },
        {
          href: "#Events",
          label: "Events",
        },
        {
          href: "#Projects",
          label: "Projects",
        },
        {
          href: "#Member",
          label: "Member",
        },
        {
          href: "#Recruitement",
          label: "Recruitement",
        },
      ],
    },
  ],

  contact: {
    heading: "会社概要",
    description: "代表者: ヒガブ中井オマル",
    address: {
      money: "資本金: 100万円",
      street: "〒105-0022 東京都港区海岸2丁目-1-16 鈴与浜松町ビル8F",
      esDay: "設立年月: 2024年9月24日",
    },
  },
};

function Footer() {
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
    <footer className="py-20 bg-white max-md:p-5">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10 text-body">
          {/* 左 */}
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0 flex justify-center lg:justify-start">
            <Link href={"#"}>
              <Image
                src={footerContent.text.logo}
                width={200}
                height={200}
                alt="logo"
                className="m-5"
              />
            </Link>
          </div>

          {/* 中央 */}
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-heading mb-5 text-xl">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0 text-xl">
                    {footerLink.links.map((link, index) => (
                      <li key={index} className="mb-3">
                        <Link
                          href={link.href}
                          className="flex items-center duration-300 transition-all ease-in-out hover:text-green group"
                          onClick={(e) => {
                          handleNavClick(e, link.href);
                          }}
                        >
                          <span className="px-1 text-xl">{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 右 */}
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0 text-xl">
            <h3 className="font-semibold text-heading mb-5 text-xl py-2">
              {footerContent.contact.heading}
            </h3>
            <ul>
              <li className="flex items-start space-x-4 mb-5 text-xl">
                <IoPerson className="text-3xl" />
                <span>{footerContent.contact.description}</span>
              </li>
              <li className="flex items-start space-x-4 mb-5 text-xl">
                <HiDatabase className="text-3xl" />
                <span>{footerContent.contact.address.money}</span>
              </li>
              <li className="flex items-start space-x-4 mb-5 text-xl">
                <FaLocationDot className="text-3xl" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-4 mb-5 text-xl">
                <FaCalendarAlt className="text-3xl" />
                <span>{footerContent.contact.address.esDay}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
          Liberal Visions 2024
        </div>
      </div>
    </footer>
  );
}

export default Footer;
