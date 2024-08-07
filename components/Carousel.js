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
	const PrevArrow = (props) => {
		const { className, style, onClick } = props
		return (
			<div
				className={className}
				style={{
					...style,
					display: "block",
					transform: "scale(1.5)",
					left: -35,
				}}
				onClick={onClick}
			/>
		)
	}
	const NextArrow = (props) => {
		const { className, style, onClick } = props
		return (
			<div
				className={className}
				style={{
					...style,
					display: "block",
					transform: "scale(1.5)",
					right: -35,
				}}
				onClick={onClick}
			/>
		)
	}
	const settings = {
		dots: true,
		className: "center",
		infinite: true,
		centerPadding: "2%",
		slidesToShow: 3,
		speed: 500,
		arrows: true,
		accessibility: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		swipeToSlide: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					swipeToSlide: true,
					dots: true,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					swipeToSlide: true,
					dots: true,
					arrows: false,
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
						source={"/images/chalk-app.webp"}
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
						source={"/images/chalk-site.webp"}
						alt={"Chalk website screenshot"}
						onClick={() => {
							window.open(
								"https://chalk-site-copy.vercel.app/",
								"_blank"
							)
						}}
					/>
					<Card
						title={"Freelance Tax Calculator"}
						description={
							"A Freelance tax calculator built with React, Styled Components to estimate taxes for 2022 and 2023."
						}
						source={"/images/taxcalculator.webp"}
						alt={"To-do app website"}
						onClick={() => {
							window.open(
								"https://freelance-tax-calculator.vercel.app/",
								"_blank"
							)
						}}
					/>
					<Card
						title={"To-do App"}
						description={
							"A To-do list application built with React, Styled Components and Firebase for authentication and data storage."
						}
						source={"/images/todo-app.webp"}
						alt={"To-do app website"}
						onClick={() => {
							window.open(
								"https://todo-app-eight-blue.vercel.app/",
								"_blank"
							)
						}}
					/>

					<Card
						title={"Weather App"}
						description={
							"A weather app built with React, Typescript, Next.js, and Styled Components"
						}
						source={"/images/weather-app.webp"}
						alt={"Weather app website"}
						onClick={() => {
							window.open(
								"https://weather-app-gamma-sable.vercel.app",
								"_blank"
							)
						}}
					/>

					{/* <Card
						title={"Call Ozzy Website"}
						description={
							"A one page website for a Seattle Real Estate Agent. Built with basic HTML and CSS."
						}
						source={"/images/call-ozzy.webp"}
						alt={"Call Ozzy website"}
						onClick={() => {
							window.open("https://callozzy.com/", "_blank")
						}}
					/> */}
				</Slider>
			</Fade>
		</Container>
	)
}

export default Carousel
