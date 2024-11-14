'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const projects = {
  text: {
    subTitle: 'PROJECT 2',
    title: '営業代行サービス',
    discription:
      '我々は、Luupや蓄電池といった環境に配慮し、持続可能な未来へ貢献できる商材を取り扱い、急速な営業事業の展開を行っています。地球環境への負担を軽減しながらも、社会的価値を生み出すためのプロダクトを提供し、企業と消費者の双方にとって理想的なソリューションの提供を目指しています。'+
      '特に、次世代のエネルギーや移動手段に対する新たなニーズに応えるため、革新的かつ効率的な営業手法を導入し、事業の加速を図っています。この取り組みの中で、若手リーダーの育成にも力を入れており、従業員が自主性と責任感を持って活躍できる環境を整え、次世代のリーダーを輩出しています。'+
      'これにより、単に商材を提供するだけでなく、ビジネスを通じて次世代のリーダーたちが環境課題解決に挑む姿勢を養い、持続可能な社会づくりに貢献するためのスキルとマインドセットを育んでいます。'+
      '私たちは、未来を見据えた視点をもつ次世代リーダーたちと共に、より良い社会の構築を目指し、日々挑戦と成長を続けています。',
  },
  images: {
    img1: '/images/S__45629445_0.jpg',
    img2: '/images/S__45629442_0.jpg',
    img3: '/images/P2.png',
    img5: '/images/p22.png',
    img4: '/images/projects5.png',
  },
};
 
function Projects2() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease',
      once: true,
    });
  });
 
  return (
    <section id="projects2" className="py-20 bg-gradient-to-bl from-white via-gray-400 to-white">
      <div className="container px-4 mx-auto">
        <div
          className="lg:flex justify-between items-center
        max-md:overflow-hidden
        "
        >
          {/* 左 */}
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span
              className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {projects.text.subTitle}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-heading mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {projects.text.title}
            </h1>
            <p
              className="leading-relaxed text-body mb-10 font-yumin"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {projects.text.discription}
            </p>
          </div>
 
          {/* 右 */}
          <div className="lg:w-6/12 space-y-2">
            {/* 上の段 */}
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                <Image
                  src={projects.images.img1}
                  width={397}
                  height={406}
                  alt="img1"
                  className="object-cover h-full w-full rounded-2xl"
                  data-aos="fade-right"
                />
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Image
                      src={projects.images.img2}
                      width={437}
                      height={437}
                      alt="img2"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-down"
                      data-aos-delay="100"
                    />
                  </div>
                  <div className="bg-body rounded-2xl rounded-tr-[200px]" />
                </div>
                <div>
                  <Image
                    src={projects.images.img3}
                    width={374}
                    height={392}
                    alt="img3"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  />
                </div>
              </div>
            </div>
 
            {/* 下の段 */}
            <div className="flex space-x-2">
              <div className="w-4/12 ">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-yellowLight rounded-2xl rounded-bl-[200px]" />
                  <Image
                    src={projects.images.img4}
                    width={394}
                    height={394}
                    alt="img4"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </div>
              </div>
              <div className="w-5/12">
                <Image
                  src={projects.images.img5}
                  width={446}
                  height={495}
                  alt="img5"
                  className="object-cover h-full w-full rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 

 
export default Projects2;