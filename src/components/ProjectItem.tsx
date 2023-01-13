import React from "react";

type ProjectItemProps = {
  img: string;
  title: string;
};

const ProjectItem = (projectItemProps: ProjectItemProps) => {
  const { img, title } = projectItemProps;
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white text-center tracking-wider">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectItem;
