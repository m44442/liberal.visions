'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const events = {
  text: {
    subTitle: 'EVENTS',
    title: 'イベント実績',
    description: '随時更新予定',
  },
  blog: [
    {
      link: '/events/genz-night-out',
      img: '/images/GenZ Night Out01.jpg',
      title: 'GenZ Night Out',
      description:
        'Z世代のために企画された大規模なコミュニティイベント',
      date: '2024年7月13日',
    },
    {
      link: '/events/snap-house',
      img: '/images/Snap House05.jpg',
      title: 'Snap House',
      description:
        'Snapchatと協力して開催された若者向けのインタラクティブイベント',
      date: '2024年9月28日',
    },
  ],
};
 
function Events() {
  const [isBeginning, setIsBeginning] = useState<boolean | null>(null);
  const [isEnd, setIsEnd] = useState<boolean | null>(null);
  const sliderRef = useRef<{ swiper: SwiperType } | null>(null);
 
  useEffect(()=>{
    if(!sliderRef.current) return
    const swiper = sliderRef.current.swiper
 
    const updateSlideStatus = ()=>{
      setIsBeginning(swiper.isBeginning)
      setIsEnd(swiper.isEnd)
    }
    swiper.on('slideChange' , updateSlideStatus)
    return ()=>{
      swiper.off('slideChange' , updateSlideStatus)
    }
  },[sliderRef])
 
  //前にスライド
  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
 
  // 次にスライド
  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
//アニメーション
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease',
      once: true,
    });
  });
 
  return (
    <section id="Events" className="py-32 bg-gradient-to-bl from-white via-gray-400 to-white overflow-x-hidden">
      <div className="container px-4 mx-auto ">
        <div className="lg:flex justify-between items-center mb-10">
          {/* 左 */}
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span className='inline-block py-1 pl-3 text-heading font-semibold 
            relative mb-7 before:content-[" "] 
            before:absolute before:w-2/3 before:bg-pinkLight 
            before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {events.text.subTitle}
            </span>
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-delay="200">
              {events.text.title}
            </h2>
            <p className="text-body leading-relaxed font-medium text-xl"
              data-aos="fade-up"
              data-aos-delay="300">
              {events.text.description}
            </p>
          </div>
 
          {/* 右 */}
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3 max-md:hidden">
              <div
                className={`
              ${
                isBeginning == true
                  ? 'opacity-30 bg-gray-300 cursor-auto'
                  : 'opacity-100 hover:bg-green'
              } 
              group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer 
              bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`
            }
                onClick={prevHandler}
              >
                <FaChevronLeft
                  className={`${
                    isBeginning == true
                      ? 'group-hover:text-green'
                      : ' group-hover:text-white'
                  }
                text-3xl text-body transition-all duration-300 ease-in-out group-hover:text-white
                `}
                />
              </div>
              <div
                className={`${
                  isEnd == true
                    ? 'opacity-30 bg-gray-300 cursor-auto'
                    : 'opacity-100 hover:bg-green'
                }
              group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA]
              rounded-full inline-flex justify-center items-center`
            }
                onClick={nextHandler}
              >
                <FaChevronRight
                  className={`${
                    isEnd == true
                      ? 'group-hover:text-green'
                      : ' group-hover:text-white'
                  }
                text-3xl text-body transition-all duration-300 ease-in-out group-hover:text-white
                `}
                />
              </div>
            </div>
          </div>
        </div>
        {/* スライド */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          className='z-50 py-32 relative flex items-stretch mb-24 !overflow-visible 
        before:content-[" "] before:py-32 before:z-50 before:right-full before:w-screen 
        before:absolute before:-top-5 before:-bottom-5'
        data-aos="fade-up"
        data-aos-delay="300"
        >
          {events.blog.map((item, index) => (
            <SwiperSlide key={index} className="overflow-visible h-full">
              <div className="p-5 rounded-lg bg-slate-50 relative mt-10 m-3">
                <Link
                  href={item.link}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4"
                >
                  <Image
                    src={item.img}
                    width={782}
                    height={567}
                    alt="blogImg"
                    className="h-60 object-cover"
                  />
                </Link>
                <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                  <Link href={item.link} className=" text-heading">
                    {' '}
                    {item.title}
                  </Link>
                </h2>
                <p className="mb-6 text-body">{item.description}</p>
                <span className="text-sm">{item.date}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
 
        {/* ボタン */}
        <div className="mx-auto flex-col items-center justify-center w-fit">
          <Link
            href={'https://instagram.com'}
            className="duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center
            text-body bg-slate-100 hover:border-gray-950 hover:bg-gray-700 hover:text-white"
          >
            新着イベント情報は
            <strong className="text-green px-1 font-semibold">Instagramをチェック！</strong>
            <span className="text-body">|</span>
            <span className="bg-green rounded-full w-8 h-8 flex items-center justify-center">
              <FaInstagramSquare className="text-body text-2xl" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
 
export default Events;
