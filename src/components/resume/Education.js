import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Abbotabad University( 2023)"
            result="3.0/4"
            des="I hold a Bachelor of Science in Computer Science (BSCS), where I gained a strong foundation in both the theoretical and practical aspects of computing. The program provided me with essential skills in software development, problem-solving, and system design, which I applied in various projects throughout my studies.."
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Govt college Peshawar (2017)"
            result="846/1100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="islamia Collegiate School Pesahawar (2015)"
            result="901/1100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
};

export default Education;
