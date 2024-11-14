'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const projects = {
  text: {
    subTitle: 'PROJECT 1',
    title: '採用コンサルティング業務',
    discription:
      '私たちの採用コンサルティング業務では、企業が即戦力となるインターンを確保できるよう、現場のニーズに即したインターンシップスキームを提案・サポートしています。このスキームは、学生が実践的なスキルを習得し、ビジネスの現場で価値を発揮できるよう構築されており、企業の人材ニーズに合わせた支援を行っています。'+
      '具体的には、選考を通じて意欲とポテンシャルを備えた学生を見極め、事業の中核にすぐに参画できるようなインターンシップ設計を提案します。インターンが実際のプロジェクトに参加し、実務を通じて課題解決や戦略立案の力を養う機会を提供し、結果として、企業側にとって即戦力となる人材を育成するための土台を提供します。'+
      '学生インターンにとっては、キャリア形成に資する実務経験やネットワーキングの機会が得られ、企業にとっても将来の成長を支える優秀な人材のプールが形成されます。',
  },
  images: {
    img1: '/images/S__45531139_0.jpg',
    img2: '/images/S__45531141_0.jpg',
    img3: '/images/projects4.png',
    img5: '/images/projects5.png',
    img4: '/images/S__45531142_0.jpg',
  },
};
 
function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease',
      once: true,
    });
  });
 
  return (
    <section id="Projects" className="py-20 max-md:py-0 bg-gradient-to-tl from-white via-gray-400 to-white">
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
 

 
export default Projects;