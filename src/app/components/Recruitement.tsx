"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const recruitementContent = {
  text: {
    subTitle: "RECRUITMENT",
    title: "求める人材",
  },
  Recruitement: [
    {
      img: "/images/S__45629442_0.jpg",
      name: "積極的で柔軟な思考力",
      testimony: "迅速に変化するビジネス環境に対応できる柔軟な思考力があり、課題に対して積極的に取り組む方。",
    },
    {
      img: "/images/S__45629444_0.jpg",
      name: "イノベーション志向",
      testimony: "新しいアイデアを積極的に提案でき、現状を打破するクリエイティブなアプローチができる人材を求めています。特に、未来志向の製品やサービスに対する興味がある方は大歓迎です。",
    },
    {
      img: "/images/S__45531141_0.jpg",
      name: "分析力と問題解決力",
      testimony: "データを分析して合理的な判断ができ、効率的な解決策を見出せる能力が求められます。",
    },
  ],
};

function Recruitement() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease',
      once: true,
    });
  });
  return (
    <section id="Recruitement" className="py-20 bg-gradient-to-bl from-white via-gray-400 to-white ">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          {/* 左 */}
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            <span
              className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 before:content-[" "] 
              before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {recruitementContent.text.subTitle}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-heading mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {recruitementContent.text.title}
            </h2>
          </div>
 
          {/* 右 */}
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              {/* ２番目だけ弾く */}
              <div className="md:w-6/12 mb-6 md:mb-0"
               data-aos="fade-up"
               data-aos-delay="100">
                {recruitementContent.Recruitement.map((item, index) => {
                  if (index === 1 ) return null;
                  return (
                    <div
                      key={index}
                      className={`bg-white p-7 rounded-lg w-full ${
                        index == 1 ? '' : 'mb-6'
                      }`}
                    >
                      <div className="flex space-x-4 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={item.img}
                            width={90}
                            height={100}
                            alt="img1"
                            className="object-cover h-15 w-15 rounded-full"
                          />
                          <span className="absolute bottom-0 -right-2 w-6 h-6 bg-green rounded-full flex items-center justify-center">
                            <FaQuoteLeft className="text-sm text-white" />
                          </span>
                        </div>
                        <div className="leading-3">
                          <strong className="block text-heading text-2xl">
                            {item.name}
                          </strong>
                        </div>
                      </div>
                      <div>
                        <blockquote className="text-body text-xl font-yumin leading-loose">
                          {item.testimony}
                        </blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
 
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-yellowLight rounded-full mb-6" />
                  <div className="bg-white p-7 rounded-lg w-full mb-6"
                   data-aos="fade-up"
                   data-aos-delay="400"
                  >
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={recruitementContent.Recruitement[1].img}
                          width={90}
                          height={90}
                          alt="img2"
                          className="object-cover w-15 h-15 rounded-full"
                        />
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-green rounded-full flex items-center justify-center">
                          <FaQuoteLeft className="text-sm text-white" />
                        </span>
                      </div>
                      <div className="leading-3">
                        <strong className="block text-heading text-2xl">
                          {recruitementContent.Recruitement[1].name}
                        </strong>
                      </div>
                    </div>
                    <blockquote className="text-body text-xl font-yumin leading-loose">
                      {recruitementContent.Recruitement[1].testimony}
                    </blockquote>
                  </div>
                </div>
                <div className="bg-redLight hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Recruitement;