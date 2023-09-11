import React from "react";
import dial from "../../src/assets/dials.png";
import bezels from "../../src/assets/bezels.png";
import straps from "../../src/assets/straps.png";
import tab from "../../src/assets/tab.png";
import tablet from "../../src/assets/tablet.png";

const TheDials = () => {
  return (
    <div className="px-4 md:px-10 lg:px-48 mt-32">
      {/* the dials start */}
      <div className="flex gap-6 md:gap-0 flex-col md:flex-row-reverse items-center justify-center">
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
      {/* the bezrls end */}
      {/* the straps start */}
      {/* the straps end */}
      {/* tiempo*/}
      {/* <div className="mt-96 mb-32">
        <p className="leading-[45px] px-36 text-4xl font-medium text-[#474A59]">
          Tiempo empowers customers to customize their own ingenieur
          chronograph, allowing for a more personalized and intelligent
          experience.
        </p>
        <img className="mx-auto" src={tab} alt="" />
        <img className="mx-auto" src={tablet} alt="" />
      </div> */}
    </div>
  );
};

export default TheDials;
