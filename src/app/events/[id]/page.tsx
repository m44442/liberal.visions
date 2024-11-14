// src/app/events/[id]/page.tsx
'use client';

import { events } from '@/events/data/events';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function EventDetail() {
  const params = useParams();
  const currentPath = `/events/${params.id}`;
  
  const event = events.blog.find(event => event.link === currentPath);

  if (!event) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-tl from-white via-gray-400 to-white">
          <div className="container mx-auto py-32">
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-2xl text-center">イベントが見つかりませんでした。</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-bl from-white via-gray-400 to-white">
        <div className="container mx-auto py-32 ">
          <div className="max-w-4xl mx-auto px-4 bg-gradient-to-t from-white via-gray-200 to-white rounded-2xl">
            {/* タイトル */}
            <div className="mb-12">
              <span 
                className='inline-block py-2 pl-4 text-heading font-medium relative mb-10 before:content-[" "] 
                before:absolute before:w-2/3 text-3xl before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]'
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {event.date}
              </span>
              <h1 
                className="text-4xl lg:text-5xl font-bold text-heading"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {event.title}
              </h1>
            </div>

            {/* 画像 */}
            <div 
              className="mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={3000}
                loop={true}
                className="w-full aspect-video"
              >
                {event.img.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        fill
                        alt={`${event.title} - ${index + 1}`}
                        className="object-cover rounded-2xl"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 説明文 */}
            <div 
              className="prose max-w-none p-4 pb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-2xl max-lg:text-xl leading-[80px] max-lg:leading-loose text-body font-medium">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}