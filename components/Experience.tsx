"use client";
import React from 'react'
import { Timeline } from './ui/Timeline';

const experienceData = [
  {
    title: "Jun 2022 – Present",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground">AI Solutions Developer / Full-Stack Developer</h3>
        <p className="text-sm text-accent">Freelance</p>
        <ul className="text-muted-foreground text-xs md:text-sm font-normal mt-2 space-y-1 list-disc list-inside">
          <li>Spearhead the development of intelligent automation systems and modern web applications designed to optimize business workflows.</li>
          <li>Lead the integration of AI models into client-facing products, specifically developing chatbots that handle complex queries and automate repetitive tasks.</li>
          <li>Maintain and expand a robust full-stack skill set, ensuring all digital services deliver measurable results (e.g., increased efficiency, higher conversion rates).</li>
          <li>Act as a bridge between technical teams and clients, ensuring solutions are not only functional but also strategically aligned with business goals.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Aug 2020 – May 2022",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground">Junior Web Developer</h3>
        <p className="text-sm text-accent">Hashtags Technology</p>
        <ul className="text-muted-foreground text-xs md:text-sm font-normal mt-2 space-y-1 list-disc list-inside">
          <li>Assisted in the development of full-stack web applications, focusing on front-end responsiveness and back-end stability.</li>
          <li>Collaborated on automation projects, learning the fundamentals of system integration and digital service delivery.</li>
        </ul>
      </div>
    ),
  },
];


const Experience = () => {
  return  (
    <div className="w-full">
      <Timeline data={experienceData} />
    </div>
  );
}

export default Experience
