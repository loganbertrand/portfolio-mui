import * as React from "react"
import { Grid, Paper, Typography, Avatar, Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const theme = createTheme()

theme.typography.h1 = {
	"@media (max-width:600px)": {
		fontSize: "3.0rem",
		textAlign: "center",
	},
	"@media (min-width:1024px)": {
		fontSize: "5rem",
		textAlign: "left",
	},
}
theme.typography.h4 = {
	"@media (max-width:600px)": {
		fontSize: "1.5rem",
		textAlign: "center",
	},
	"@media (min-width:1024px)": {
		fontSize: "2.0rem",
		textAlign: "left",
	},
}

//Build container around this section to make gradients and shapes outside of it as a background element. So inner has the max width of lg but outside has no limit

const Hero = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				alignItems="center"
				justifyContent={"space-evenly"}
				height={"100%"}
				minHeight="90vh"
			>
				<Grid
					item
					xs={12}
					sm={7}
					justifyContent={"center"}
					alignItems="center"
				>
					<Typography variant="h1">
						Your Friendly Neighborhood Software Developer
					</Typography>
					<Typography variant="h4">
						I create websites and apps focused on clean, simple user
						experiences.
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					sm={5}
					justifyContent={"center"}
					alignItems="center"
				>
					<img
						src="images/web-dev.jpg"
						height={"auto"}
						width="100%"
					/>
					<GitHubIcon />
					<LinkedInIcon />
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default Hero
