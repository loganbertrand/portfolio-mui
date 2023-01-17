import * as React from "react"
import { styled } from "@mui/material/styles"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "@mui/material"
import Fade from "@successtar/react-reveal"

import Card from "./Card"

const Title = styled("div")(({ theme }) => ({
	fontFamily: "Epilogue, sans-serif",
	fontWeight: "600",
	marginBottom: "0.35em",
	[theme.breakpoints.down("md")]: {
		textAlign: "center",
		fontSize: "1.7em",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "left",
		fontSize: "3.5em",
	},
}))

const Carousel = () => {
	const settings = {
		dots: true,
		className: "center",
		centerMode: "true",
		infinite: true,
		centerPadding: "2%",
		slidesToShow: 3,
		speed: 500,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<Container
			sx={{
				my: 7,
			}}
			style={{
				minHeight: "70vh",
			}}
			maxWidth="xl"
		>
			<Fade>
				<Title>Projects</Title>
			</Fade>

			<Fade right>
				<Slider {...settings}>
					<Card
						title={"Chalk Esports"}
						description={
							"A video game tournament app. Built with React Native, Styled Components, Apollo GraphQL, and AWS."
						}
						source={"/images/chalk-app.avif"}
						alt={"Chalk app screenshot"}
						onClick={() => {
							window.open(
								"https://apps.apple.com/us/app/chalk-esports-tournaments/id1559663332",
								"_blank"
							)
						}}
					/>
					<Card
						title={"Chalk App Website"}
						description={
							"The main website for Chalk Esports. Built with React, Next.js, and Styled Components. "
						}
						source={"/images/chalk-site.avif"}
						alt={"Chalk website screenshot"}
						onClick={() => {
							window.open("https://www.chalkapp.co/", "_blank")
						}}
					/>

					<Card
						title={"Call Ozzy Website"}
						description={
							"A one page website for a Seattle Real Estate Agent. Built with basic HTML and CSS."
						}
						source={"/images/call-ozzy.avif"}
						alt={"Call Ozzy website"}
						onClick={() => {
							window.open("https://callozzy.com/", "_blank")
						}}
					/>
					<Card
						title={"To-do App"}
						description={
							"A To-do list application built with React, Styled Components and Firebase for authentication and data storage."
						}
						source={"/images/todo-app.avif"}
						alt={"To-do app website"}
						onClick={() => {
							window.open(
								"https://todo-app-eight-blue.vercel.app/",
								"_blank"
							)
						}}
					/>
				</Slider>
			</Fade>
		</Container>
	)
}

export default Carousel
