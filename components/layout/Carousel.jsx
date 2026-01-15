"use client";
import React, { useEffect, useState } from "react";
import { multipleImages } from "@/helpers/sources";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import Image from "next/image";
import { FadeInSection } from ".";

const Carousel = ({ heroSectionImages }) => {
  const [silderImg, setSliderImg] = useState(multipleImages);
  const [currentItem, setCurrentItem] = useState(0);

  // auto play function
  useEffect(() => {
    const autoplay = setInterval(() => {
      nextBgSlide();
    }, [5000]);

    return () => {
      clearInterval(autoplay);
    };
  }, [currentItem]);

  // next bg slide function
  const nextBgSlide = () => {
    setCurrentItem((oldBgImage) => {
      const bgResult = bgImageStatus();
      const result = (oldBgImage + 1) % bgResult.length;
      return result;
    });
  };

  // previous bg slide function
  const prevBgSlide = () => {
    setCurrentItem((oldBgImage) => {
      const bgResult = bgImageStatus();
      const result =
        (oldBgImage - 1 + heroSectionImages.length) % bgResult.length;
      return result;
    });
  };

  const bgImageStatus = () => {
    if (heroSectionImages && heroSectionImages.length > 0) {
      return heroSectionImages;
    } else {
      return silderImg;
    }
  };

  return (
    <section className=" relative">
      {/*  CAROUSEL IMAGES*/}
      <div className="w-full relative h-76 max-w-500 overflow-hidden">
        {/* IMAGES */}
        {!heroSectionImages || heroSectionImages?.length === 0 ? (
          <>
            {silderImg.map((data, bgImageIndex) => {
              const { id, image } = data;

              return (
                <aside
                  key={id}
                  className={`absolute top-0 left-0 w-full overflow-hidden h-full`}
                  style={{
                    transform: `translateX(${
                      100 * (bgImageIndex - currentItem)
                    }%)`,
                    opacity: bgImageIndex === currentItem ? 1 : 0,
                    visibility:
                      bgImageIndex === currentItem ? "visible" : "hidden",
                    transition: "all 1s ease-in-out",
                  }}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={`/${image}`}
                    alt="image"
                    style={{ width: "auto", height: "auto" }}
                    width={300}
                    height={300}
                    priority="true"
                  />
                </aside>
              );
            })}
          </>
        ) : (
          <>
            {heroSectionImages.map((data, bgImageIndex) => {
              const { id, image_url } = data;

              return (
                <aside
                  key={id}
                  className={` absolute top-0 left-0 w-full h-full`}
                  style={{
                    transform: `translateX(${
                      100 * (bgImageIndex - currentItem)
                    }%)`,
                    opacity: bgImageIndex === currentItem ? 1 : 0,
                    visibility:
                      bgImageIndex === currentItem ? "visible" : "hidden",
                    transition: "all 1s ease-in-out",
                  }}
                >
                  <Image
                    className="w-full h-full object-cover shrink-0"
                    src={`/${image_url}`}
                    alt="image"
                    style={{ width: "100%", height: "auto" }}
                    width={300}
                    height={300}
                    priority
                  />
                </aside>
              );
            })}
          </>
        )}
      </div>

      <section
        className="bg-[rgba(0,0,0,.7)] py-30 text-center 
      group absolute top-0 bottom-0 left-0 right-0 text-white 
      inset-0 bg-linear-to-r from-green-900/20 to-blue-900/20"
      >
        {/* SLIDE ARROW BUTTONS */}
        <div className=" z-50">
          <FaChevronCircleLeft
            className={`w-10 h-10 absolute cursor-pointer opacity-70 top-[37%] left-[1%] hover:opacity-100 transition-opacity focus-within:opacity-100 ${
              currentItem === 0 && "hidden"
            }`}
            onClick={prevBgSlide}
          />
          <FaChevronCircleRight
            className={`w-10 h-10 absolute cursor-pointer opacity-50 top-[37%] right-[1%] hover:opacity-100 transition-opacity focus-within:opacity-100  ${
              heroSectionImages.length > 3 && "hidden"
            }`}
            onClick={nextBgSlide}
          />
        </div>
        <FadeInSection>
          {/* HERO SECTION DETAIL */}

          <div className="container mx-auto px-7 text-lg md:text-xl lg:text-2xl">
            <h1 className="font-bold mb-4 ">
              Protecting Nature, Together Empowering Communities for the future
            </h1>

            <p className="mb-6">
              Join us to fight climate change and restore our planet.
            </p>
          </div>
          <div className="space-x-4">
            <a
              href="/get-involved"
              className="bg-[#171717] text-white px-6 py-2 rounded"
            >
              Get Involved
            </a>
            <a
              href="/donate"
              className="bg-white border text-[#171717] font-medium px-6 py-2 rounded"
            >
              Donate Now
            </a>
          </div>
        </FadeInSection>
      </section>
    </section>
  );
};

export default Carousel;
