import React from "react";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<div className="hero">
				<h2>
					<em>Hello, </em>I am
				</h2>
				<h1>WON KIM</h1>
				<h3>Frontend developer based in Hawaii, US</h3>
			</div>
			<main>
				<div>Projects</div>
				<div>Skills</div>
			</main>
		</div>
	);
}

export default Home;
