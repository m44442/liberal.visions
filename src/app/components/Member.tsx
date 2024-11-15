"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const member = {
  text: {
    position: "Founder/CEO",
    MemberName: "ヒガブ 中井 オマル",
    EnName: "Hegab Nakai Omar",
    discription:
      "早稲田大学国際教養学部4年。大学1年次、営業インターンとして記録的な成果を残す。その後、数々の学生団体や大型プロジェクトを率い、リーダーシップとビジョンを磨く。若い世代の課題に着目し、日本での起業を果たす。 ",
  },
  images: {
    img1: "/images/IMG_1247.jpg",
  },
};

function Member() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <section
      id="Member"
      className="py-20 bg-gradient-to-tl from-white via-gray-400 to-white w-full pb-40"
    >
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* 左 */}
          <div className="w-full lg:w-7/12 mb-12 lg:mb-0 text-center">
            <span
              className='inline-block py-2 pl-4 text-heading font-semibold relative mb-10 before:content-[" "] 
              before:absolute before:w-2/3 text-3xl before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {member.text.position}
            </span>
            <div className="bg-slate-100 h-full w-full py-20">
              <div className="flex justify-center">
                <p className="items-stretch w-7/12 mb-10">
                  <Image
                    src={member.images.img1}
                    width={400}
                    height={400}
                    alt="img1"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-right"
                  />
                </p>
              </div>
              <h1
                className=" flex justify-center text-3xl lg:text-6xl font-bold text-heading mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {member.text.MemberName}
              </h1>
              <p
                className="leading-relaxed text-body mb-12 font-semibold text-xl lg:text-3xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {member.text.EnName}
              </p>
              <p
                className="leading-relaxed text-body mb-1 font-yumin text-[20px] lg:text-3xl w-full px-10"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {member.text.discription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Member;
