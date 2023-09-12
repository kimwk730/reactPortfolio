import React from "react";
import Github from "../assets/github.png";

function ProjectItem({ image, name, skill, id, website, github }) {
	return (
		<div className="projectItem" id={id}>
			<div className="projectPic">
				<img src={image} className="projPic" alt="picpic" />
			</div>
			<div className="info">
				<h2>{name}</h2>
				<p>{skill}</p>
				<div className="links">
					<button>
						<a href={website} target="_blank">
							Launch
						</a>
					</button>
					<a href={github} target="_blank">
						<img src={Github} className="githubLogo" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
