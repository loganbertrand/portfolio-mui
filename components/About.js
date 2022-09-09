import * as React from "react"
import { Grid, Paper, Typography, Avatar } from "@mui/material"

const About = () => {
	return (
		<Grid
			container
			spacing={2}
			alignItems="center"
			justifyContent={"space-evenly"}
		>
			<Grid
				item
				xs={12}
				sm={5}
				justifyContent={"center"}
				alignItems="center"
			>
				<Avatar
					alt="Logan Bertrand Profile Photo"
					src="images/Profile-Photo-1mb.jpg"
					sx={{ width: 350, height: 350 }}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={5}
				justifyContent={"center"}
				alignItems="center"
			>
				<Typography>
					I enjoy creating interactive user experiences that anyone
					can understand, along with being highly creative in regards
					to problem solving and innovating a website. I am a quick
					learner excited to use the skills I have learned in the tech
					or video game industry. I have a strong commitment to
					mastering various languages and Front-End related
					programming. I work well in both collaborating with others
					or independently on projects.
				</Typography>
			</Grid>
		</Grid>
	)
}

export default About
