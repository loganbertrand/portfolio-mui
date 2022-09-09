import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Carousel from "../components/Carousel"
import Copyright from "../src/Copyright"
import About from "../components/About"

export default function Index() {
	return (
		<Container
			maxWidth="lg"
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Typography variant="h1" component="h1" gutterBottom>
				Your Friendly Neighborhood Web / App Developer
			</Typography>
			<Carousel />
			<About />
			<Copyright />
		</Container>
	)
}
