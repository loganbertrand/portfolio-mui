import * as React from "react"
import { useState, useEffect } from "react"
import Fade from "@successtar/react-reveal"
import { Parallax } from "react-scroll-parallax"
import { Grid, Avatar } from "@mui/material"
import { styled } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Image from "next/image"
import { ImageProfile } from "./Image"

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
	const [isSmall, setIsSmall] = useState()

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
		if (window.width > 1000) {
			setIsSmall(true)
		}
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
					<Fade>
						<Title>
							Your Friendly Neighborhood Software Developer
						</Title>
					</Fade>

					<Fade>
						<About>
							{/* Hi! My name is Logan Bertrand, and I am a software
							developer with a passion for working with React and
							React Native. I particularly enjoy front-end
							development and creating intuitive and engaging user
							interfaces. What sets me apart from other developers
							is my background in business, which has provided me
							with a unique perspective on how technology can be
							used to solve real-world problems and improve the
							user experience. I am always eager to take on new
							challenges and collaborate with others to create
							innovative solutions. If you're looking for a
							developer who can bring both technical expertise and
							a business-oriented mindset to your team, I would
							love to chat! */}
							Hey there! I'm Logan Bertrand, a seasoned
							professional adept in project and product
							management. My journey began in the vibrant world of
							software development, where I found my niche in
							crafting seamless user experiences using React and
							React Native. With a keen focus on front-end
							development, I thrive on building intuitive
							interfaces that captivate users and drive
							engagement. What sets me apart is my unique blend of
							technical prowess and business acumen. Armed with a
							Bachelor's in Technological Entrepreneurship and
							Management, I bring a strategic perspective to my
							development endeavors. I firmly believe that
							technology should not only solve problems but also
							enhance the user journey, and my background empowers
							me to do just that. Driven by a passion for
							innovation, I'm always on the lookout for fresh
							challenges and collaborative opportunities. Whether
							it's leading sprint planning sessions or conducting
							customer interviews to glean insights, I'm committed
							to delivering results that exceed expectations.
						</About>
						<br />
						<About>
							For a more in depth look of my background, visit my{" "}
							<a
								href="https://www.linkedin.com/in/logan-bertrand-/"
								style={{ color: "black" }}
								target="_blank"
							>
								LinkedIn
							</a>
							.
						</About>
					</Fade>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}
					display="flex"
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems="center"
				>
					<Fade>
						<Parallax speed={isSmall ? -10 : -1}>
							<span
								style={{
									position: "relative",
									overflow: "hidden",
								}}
							>
								<ImageProfile
									alt="Logan Bertrand Profile Photo"
									width={350}
									height={350}
								/>
							</span>
						</Parallax>
					</Fade>
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
