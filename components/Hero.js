import * as React from "react"
import {
	Grid,
	Paper,
	Typography,
	Avatar,
	Button,
	Container,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const styles = {
	title: {
		"@media (max-width:600px)": {
			textAlign: "center",
			fontSize: "10px",
		},
		"@media (min-width:1024px)": {
			textAlign: "left",
		},
	},
	about: {
		"@media (max-width:600px)": {
			textAlign: "center",
			width: "96%",
		},
		"@media (min-width:1024px)": {
			textAlign: "left",
			maxWidth: "80%",
		},
	},
}

//Build container around this section to make gradients and shapes outside of it as a background element. So inner has the max width of lg but outside has no limit

const Hero = () => {
	return (
		<>
			<Grid
				container
				alignItems="center"
				justifyContent={"space-evenly"}
				height={"100%"}
				minHeight="85vh"
				spacing={1}
			>
				<Grid
					item
					xs={12}
					sm={7}
					justifyContent={"center"}
					alignItems="center"
				>
					<Typography variant="h1" style={styles.title}>
						Your Friendly Neighborhood Software Developer
					</Typography>
					<Typography>
						My name is Logan Bertrand and I enjoy creating
						interactive user experiences that anyone can understand,
						along with being highly creative in regards to problem
						solving and innovating a website. I am a quick learner
						excited to use the skills I have learned in the tech or
						video game industry. I have a strong commitment to
						mastering various languages and Front-End related
						programming. I work well in both collaborating with
						others or independently on projects.
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					sm={4}
					justifyContent={"center"}
					alignItems="center"
				>
					<Avatar
						alt="Logan Bertrand Profile Photo"
						src="images/Profile-Photo-1mb.jpg"
						sx={{ width: 350, height: 350 }}
					/>
					<Grid>
						<GitHubIcon />
						<LinkedInIcon />
						<MailOutlineIcon />
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				alignItems="flex-start"
				justifyContent={"center"}
				height={"100%"}
				minHeight="10vh"
			>
				<KeyboardArrowDownIcon fontSize="large" />
			</Grid>
		</>
	)
}

export default Hero
