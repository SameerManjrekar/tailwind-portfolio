import React from "react";

type WorkItemProps = {
  id?: number;
  title: string;
  year: number;
  duration: string;
  details: string;
};

const WorkItem = (workItemProps: WorkItemProps) => {
  const { year, title, duration, details } = workItemProps;
  return (
    <ul className="flex flex-col md:flex-row relative border-l border-stone-300">
      <li className="mb-10 ml-4">
        <div className="absolute  w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap flex-row items-center justify-start gap-4 text-xs md:text-md">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p>
          <span className="my-2 font-normal text-base text-stone-500">
            {details}
          </span>
        </p>
      </li>
    </ul>
  );
};

export default WorkItem;
