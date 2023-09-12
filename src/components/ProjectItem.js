import React from "react";

function ProjectItem({ image, name, skill, id }) {
	return (
		<div className="projectItem" id={id}>
			<div className="projectPic">
				<img src={image} alt="picpic" />
			</div>
			<div className="info">
				<h2>{name}</h2>
				<p>{skill}</p>
			</div>
		</div>
	);
}

export default ProjectItem;
