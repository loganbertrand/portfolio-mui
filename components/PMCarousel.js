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
				minHeight: "80vh",
			}}
			maxWidth="xl"
		>
			<Fade>
				<Title>Project & Product Management</Title>
			</Fade>

			<Fade right>
				<Slider {...settings}>
					<Card
						title={"Chalk Esports Product Feature"}
						description={
							"A Slide Deck including user stories, business modeling, roadmaps, strategic planning, product requirements, business impact, and my contributions to the team."
						}
						source={"/images/chalk-product-feature.webp"}
						alt={"Chalk product feature"}
						onClick={() => {
							window.open(
								"https://docs.google.com/presentation/d/1pX8Z1mKfTGsykWcybEk0VcetOSnib4lE9lYeyrtdsZM/edit?usp=sharing",
								"_blank"
							)
						}}
					/>
					<Card
						title={"Greeting Card Case Study"}
						description={
							"A case study on creating an online e-commerce greeting card company from start-up to success. "
						}
						source={"/images/simplicity.webp"}
						alt={"greeting card article screenshot"}
						onClick={() => {
							window.open(
								"https://medium.com/@loganwbertrand/simplicity-greeting-card-case-study-6374df9448d4",
								"_blank"
							)
						}}
					/>
					<Card
						title={"Chalk Esports Case Study"}
						description={
							"A case study for the Chalk App, and how the platform changed over time to fit the ever-changing gaming industry."
						}
						source={"/images/chalk-image-medium-1.webp"}
						alt={"chalk case study"}
						onClick={() => {
							window.open(
								"https://medium.com/@loganwbertrand/chalk-esports-a-case-study-in-the-attempt-at-esports-for-everyone-f124b088e4b0",
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
