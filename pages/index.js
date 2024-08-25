import * as React from "react"
import { Paper, Container } from "@mui/material"
import { ParallaxProvider } from "react-scroll-parallax"

import Copyright from "../src/Copyright"

import Hero from "../components/Hero"

export default function Index() {
	return (
		<ParallaxProvider>
			<Container maxWidth={false} style={{ padding: 0 }}>
				<Container
					maxWidth="xl"
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Hero />
					<Copyright />
				</Container>
			</Container>
		</ParallaxProvider>
	)
}
