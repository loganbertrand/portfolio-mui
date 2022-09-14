import * as React from "react"
import { Paper, Container } from "@mui/material"

import Carousel from "../components/Carousel"
import Copyright from "../src/Copyright"
import About from "../components/About"
import Hero from "../components/Hero"

export default function Index() {
	return (
		<Container maxWidth={false} style={{ padding: 0 }}>
			<Container
				maxWidth="xl"
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Hero />
				<Carousel />

				<Copyright />
			</Container>
		</Container>
	)
}
