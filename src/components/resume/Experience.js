import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front End Developer"
            subTitle="Firnas.Tech - (2024 - Present)"
            result="Abbotabad"
            des="Front-end developer with 1 year of experience building user-friendly and responsive web applications. Skilled in HTML, CSS, and JavaScript, with a strong understanding of UI/UX design principles. Passionate about creating beautiful and functional web experiences, and always eager to learn new technologies."
          />
          <ResumeCard
            title="Internee"
            subTitle="Internee - (6 Months)"
            result="Abbotabad"
            des="Front-end developer with experience in building user-friendly web applications. Previously interned at ExpandMore, where I gained experience in Shopify, WordPress, and front-end development."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="UpWork- (Present)"
            result="Pakistan"
            des="Developed and maintained a variety of web applications using the MERN stack, including e-commerce platforms, social media apps. Proficient in React, Node.js, Express.js, and MongoDB."
          />
        </div>
      </div>
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
