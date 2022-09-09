import * as React from "react"
import Typography from "@mui/material/Typography"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Box from "@mui/material/Box"

import Card from "./Card"

const Carousel = () => {
	const settings = {
		dots: true,
		className: "center",

		infinite: true,
		centerPadding: "1%",
		slidesToShow: 3,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
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
		<Box sx={{ my: 4 }}>
			<Slider {...settings}>
				<Card
					title={"Chalk App"}
					description={"An app for video game tournaments"}
					source={"images/chalk-app.png"}
					alt={"Chalk app screenshot"}
				/>
				<Card
					title={"Chalk Website"}
					description={
						"Website for an app for video game tournaments"
					}
					source={"images/chalk-site.png"}
					alt={"Chalk website screenshot"}
				/>
				<Card
					title={"Call Ozzy Website"}
					description={"A website for a Seattle Real Estate Agent"}
					source={"images/call-ozzy.png"}
					alt={"Call Ozzy website"}
				/>
				<Card
					title={"Project 4"}
					description={"A project that showcases react hooks"}
				/>
				<Card title={"Project 5"} description={"Another project"} />
			</Slider>
		</Box>
	)
}

export default Carousel
