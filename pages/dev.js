import * as React from "react"
import { Paper, Container } from "@mui/material"
import { ParallaxProvider } from "react-scroll-parallax"

import Carousel from "../components/Carousel"
import Copyright from "../src/Copyright"
import PMCarousel from "../components/PMCarousel"
import Hero from "../components/Hero"

export default function Dev() {
	return (
		<ParallaxProvider>
			<Container maxWidth={false} style={{ padding: 0 }}>
				<Container
					maxWidth="xl"
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Hero page={"dev"} />
					<Carousel />
					<Copyright />
				</Container>
			</Container>
		</ParallaxProvider>
	)
}
