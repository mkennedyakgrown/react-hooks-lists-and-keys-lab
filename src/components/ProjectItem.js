import React from "react";

function ProjectItem({ name, about, technologies, id }) {
  const technologyItems = technologies.map((technologyItem) => {
    return <span key={technologyItem}>{technologyItem}</span>;
  })

  return (
    <div key={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        { technologyItems };
      </div>
    </div>
  );
}

export default ProjectItem;
