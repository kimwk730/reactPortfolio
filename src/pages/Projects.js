import React from "react";
import ProjectItem from "../components/ProjectItem";
import Clock from "../assets/clock.png";
import Weather from "../assets/weather.png";
import Dictionary from "../assets/dictionary.png";
import "../styles/Projects.css";

function Projects() {
	return (
		<div className="projects">
			<h1>My Projects</h1>
			<div className="projectList">
				<ProjectItem name="World Clock" image={Clock} />
				<ProjectItem name="Weather App" image={Weather} />
				<ProjectItem name="Dictionary App" image={Dictionary} />
			</div>
		</div>
	);
}

export default Projects;
