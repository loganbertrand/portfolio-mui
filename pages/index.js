import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Carousel from "../components/Carousel"
import Copyright from "../src/Copyright"
import About from "../components/About"
import Hero from "../components/Hero"

export default function Index() {
	return (
		<Container maxWidth={false}>
			<Container
				maxWidth="xl"
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Hero />
				<Carousel />
				<About />
				<Copyright />
			</Container>
		</Container>
	)
}
