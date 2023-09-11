import React from "react";
import dial from "../../src/assets/dials.png";
import bezels from "../../src/assets/bezels.png";
import straps from "../../src/assets/straps.png";
import tab from "../../src/assets/tab.png";
import laptop from "../../src/assets/laptop.png";
import tablet from "../../src/assets/tablet.png";

const TheDials = () => {
  return (
    <div className="px-6 md:px-16 lg:px-56 mt-10 md:mt-16 lg:mt-24">
      <h2 className="mb-4 md:mb-5 lg:mb-10 text-xl md:text-2xl lg:text-3xl text-center font-medium uppercase">
        how it’s works
      </h2>
      <hr className="h-px w-16 md:w-20 lg:w-24 bg-[#989898] mx-auto" />
      {/* the dials start */}
      <div className="mt-12 md:mt-20 lg:mt-26 flex gap-6 md:gap-0 flex-col md:flex-row-reverse items-center justify-center">
        <div className="flex-1">
          <img
            className="w-[200px] md:w-[250px] lg:w-[295px]"
            src={dial}
            alt=""
          />
        </div>
        <div className="flex-1">
          <p className="text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#474A59]">
            01/
          </p>
        </div>
        <div className="flex-1">
          <h2 className="mb-1.5 md:mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl text-[#474A59] font-semibold uppercase">
            the dials
          </h2>
          <hr className="h-0.5 w-8 md:w-11 bg-[#E6E6E6]" />
          <p className=" text-justify mt-4 md:mt-4 lg:mt-10 mb-6 md:mb-6 lg:mb-14 text-sm lg:text-base font-normal text-[#474A59]">
            Keep it classic with the sweeping dome bezel or add the fire and
            brilliance of a diamond packed bezel. Even Better, coordinate with a
            ring of the most vivid sapphire stones.
          </p>
          <button className="px-4 md:px-5 lg:px-10 py-1.5 md:py-2 lg:py-3 border-solid border rounded-3xl border-[#474A59] text-sm lg:text-base font-normal uppercase text-[#3D3B3C]">
            Configure
          </button>
        </div>
      </div>
      {/* the dials end */}
      {/* the bezels start */}
      <div className="mt-16 md:mt-24 lg:mt-36 flex gap-6 md:gap-0 flex-col md:flex-row items-center justify-center">
        <div className="flex-1">
          <img
            className="w-[200px] md:w-[250px] lg:w-[295px]"
            src={bezels}
            alt=""
          />
        </div>
        <div className="flex-1">
          <p className="text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#474A59]">
            02/
          </p>
        </div>
        <div className="flex-1">
          <h2 className="mb-1.5 md:mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl text-[#474A59] font-semibold uppercase">
            the bezels
          </h2>
          <hr className="h-0.5 w-8 md:w-11 bg-[#E6E6E6]" />
          <p className=" text-justify mt-4 md:mt-4 lg:mt-10 mb-6 md:mb-6 lg:mb-14 text-sm lg:text-base font-normal text-[#474A59]">
            Keep it classic with the sweeping dome bezel or add the fire and
            brilliance of a diamond packed bezel. Even Better, coordinate with a
            ring of the most vivid sapphire stones.
          </p>
          <button className="px-4 md:px-5 lg:px-10 py-1.5 md:py-2 lg:py-3 border-solid border rounded-3xl border-[#474A59] text-sm lg:text-base font-normal uppercase text-[#3D3B3C]">
            Configure
          </button>
        </div>
      </div>
      {/* the bezrls end */}
      {/* the straps start */}
      <div className="mt-16 md:mt-24 lg:mt-36 flex gap-6 md:gap-0 flex-col md:flex-row-reverse items-center justify-center">
        <div className="flex-1">
          <img
            className="w-[200px] md:w-[250px] lg:w-[295px]"
            src={straps}
            alt=""
          />
        </div>
        <div className="flex-1">
          <p className="text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#474A59]">
            03/
          </p>
        </div>
        <div className="flex-1">
          <h2 className="mb-1.5 md:mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl text-[#474A59] font-semibold uppercase">
            the straps
          </h2>
          <hr className="h-0.5 w-8 md:w-11 bg-[#E6E6E6]" />
          <p className=" text-justify mt-4 md:mt-4 lg:mt-10 mb-6 md:mb-6 lg:mb-14 text-sm lg:text-base font-normal text-[#474A59]">
            A choice between the distinctive design of the Jubilee or the sporty
            Oyster bracelet made even harder by the assortment of our vivid
            integrated rubber straps
          </p>
          <button className="px-4 md:px-5 lg:px-10 py-1.5 md:py-2 lg:py-3 border-solid border rounded-3xl border-[#474A59] text-sm lg:text-base font-normal uppercase text-[#3D3B3C]">
            Configure
          </button>
        </div>
      </div>
      {/* the straps end */}
      {/* tiempo*/}
      <div className="mt-52 mb-24">
        <div className="px-20 mb-20 ">
          <p className="pl-12 border-l-2 border-[#5D5D5D] text-2xl md:text-3xl lg:text-4xl leading-[45px] font-medium text-[#474A59]">
            Tiempo empowers customers to customize their own ingenieur
            chronograph, allowing for a more personalized and intelligent
            experience.
          </p>
        </div>
        <img src={tab} alt="" />
        <div className="mt-10 flex flex-col md:flex-row gap-5 items-center justify-center mx-auto">
          <img className="" src={tablet} alt="" />
          <img className="" src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TheDials;
