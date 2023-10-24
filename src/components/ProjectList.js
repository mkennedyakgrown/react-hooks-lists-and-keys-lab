import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map((project) => {
    return ProjectItem(project);
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        { projectItems }
      </div>
    </div>
  );
}

export default ProjectList;
