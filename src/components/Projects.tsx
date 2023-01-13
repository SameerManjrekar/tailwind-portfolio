import React from "react";

import ProjectItem from "./ProjectItem";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        These are some of the projects that I have worked on using React js,
        Redux, TailwindCSS, MUI, Bootstrap and using SQL Server as the database.
        Some of the projects are in financial domain, some are in Oil and Gas
        domain and I have learnt a lot in working on these projects.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={project1} title="ToDo App" />
        <ProjectItem img={project2} title="ECommerce App" />
        <ProjectItem img={project3} title="Fitness App" />
        <ProjectItem img={project4} title="Travel App" />
        <ProjectItem img={project5} title="Tracker App" />
        <ProjectItem img={project6} title="Dashboard App" />
      </div>
    </div>
  );
};

export default Projects;
