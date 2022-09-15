import * as React from "react"
import { useState, useEffect } from "react"
import { Grid, Avatar } from "@mui/material"
import { styled } from "@mui/material/styles"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const Title = styled("div")(({ theme }) => ({
	fontFamily: "Epilogue, sans-serif",
	fontWeight: "700",
	marginBottom: "0.35em",
	[theme.breakpoints.down("md")]: {
		textAlign: "center",
		fontSize: "2em",
		marginTop: "0.45em",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "left",
		fontSize: "5em",
	},
}))

const About = styled("div")(({ theme }) => ({
	fontFamily: "Roboto, sans-serif",
	[theme.breakpoints.down("md")]: {
		textAlign: "center",
		fontSize: "1em",
		marginBottom: "1em",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "left",
		fontSize: "1.2em",
		fontWeight: "400",
	},
}))

//Build container around this section to make gradients and shapes outside of it as a background element. So inner has the max width of lg but outside has no limit

const Hero = () => {
	const [visible, setVisible] = useState(true)

	const listenToScroll = () => {
		let heightToHideFrom = 300
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop

		if (winScroll > heightToHideFrom) {
			visible && setVisible(false)
		} else {
			setVisible(true)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll)
		return () => window.removeEventListener("scroll", listenToScroll)
	}, [])

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
					<Title>Your Friendly Neighborhood Software Developer</Title>
					<About>
						My name is Logan Bertrand and I enjoy creating
						interactive user experiences that anyone can understand,
						along with being highly creative in regards to problem
						solving and innovating a website. I am a quick learner
						excited to use the skills I have learned in the tech or
						video game industry. I have a strong commitment to
						mastering various languages and Front-End related
						programming. I work well in both collaborating with
						others or independently on projects.
					</About>
				</Grid>

				<Grid
					item
					xs={12}
					sm={4}
					display="flex"
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems="center"
				>
					<Avatar
						alt="Logan Bertrand Profile Photo"
						src="images/Profile-Photo-1mb.jpg"
						sx={{ width: 350, height: 350 }}
					/>
					<div
						style={{
							width: "80%",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<a
							href="mailto:loganwbertrand@gmail.com"
							style={{ color: "black" }}
						>
							<MailOutlineIcon fontSize="medium" />
						</a>
						<a
							href="https://www.linkedin.com/in/logan-bertrand-/"
							style={{ color: "black" }}
							target="_blank"
						>
							<LinkedInIcon fontSize="medium" />
						</a>
						<a
							href="https://github.com/loganbertrand"
							style={{ color: "black" }}
							target="_blank"
						>
							<GitHubIcon fontSize="medium" />
						</a>
					</div>
				</Grid>
			</Grid>
			<Grid
				container
				alignItems="flex-start"
				justifyContent={"center"}
				height={"100%"}
				minHeight="10vh"
			>
				{visible && <KeyboardArrowDownIcon fontSize="large" />}
			</Grid>
		</>
	)
}

export default Hero
