"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { info } from "autoprefixer";

function variants() {
    return {
      offscreen: {
        y: 150,
        opacity: 0,
      },
      onscreen: ({ duration = 2 } = {}) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration,
        },
      }),
    };
  }

export default function ClientAboutView({ data }) {
  console.log(data, "aboutData");

  const setVariants = useMemo(() => variants(), []);

  const aboutDataInfo = [
    {
      label: "Clients",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];

  return (
    <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14  px-6 sm:px-8 lg:px-16 mx-auto">
      <AnimationWrapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-0 divide-blue-main bg-white-500 z-10">
        {aboutDataInfo.map((infoItem, index) => (
          <motion.div
            className={`flex items-center justify-start
                  ${
                    index === 0
                      ? "sm:justify-start"
                      : index === 1
                      ? "sm:justify-center"
                      : "sm:justify-end"
                  } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0

                  `} key={index}
                  custom={{duration: 2+index}}
                  variants={setVariants}
          >
            <div className="flex m-0 w-40 sm:w-auto">
                <div className="flex flex-col">
                    <p className="text-[50px] text-blue-main font-bold">{infoItem.value}+</p>
                    <p className="text-[24px] font-bold text-[#000]">{infoItem.label}</p>
                </div>

            </div>
          </motion.div>
        ))}
      </AnimationWrapper>
    </div>
  );
}
