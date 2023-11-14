"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { BsFacebook,BsLinkedin,BsGithub } from "react-icons/bs";

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

export default function ClientHomeView({ data }) {
  console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className={
            "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          }
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading
                    .split(" ")
                    .map((item, index) => (
                      <span
                        className={`${
                          index === 2 || index === 3
                            ? "text-blue-main"
                            : "text-[black]"
                        }`}
                      >
                        {item}{" "}
                      </span>
                    ))
                : null}
            </h1>
            <p className="text-[black] mt-4 mb-8 font-bold">{data && data.length
                ? data[0]?.summary:null}</p>
            <motion.div className='flex gap-3'>
                <BsFacebook color="#4585ed" className="w-[40px] h-[40px] mr-4"/>
                <BsLinkedin color="#4585ed" className="w-[40px] h-[40px] mr-4"/>
                <BsGithub color="#4585ed" className="w-[40px] h-[40px] mr-4"/>
            </motion.div>
          </div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
