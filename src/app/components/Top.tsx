"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Top() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease",
      once: true,
    });
  });

  return (
    <div
      id="Top"
      className="h-screen flex flex-col bg-gradient-to-tl from-white via-gray-400 to-white"
    >
      <section
        id="top"
        className="flex h-screen flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="60"
      >
        <div className="container px-4 mx-auto -mt-[50px]">
          <div className="flex justify-center items-center py-7">
            <Image
              src={"/images/Logo_Sub.png"}
              width={1000}
              height={40}
              alt="title image"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center items-center italic font-yumin text-sm text-black sm:text-xl md:text-xl lg:text-2xl">
            <h1 className="text-center m-4">
              次世代リーダーと共に未来を切り開く
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Top;
