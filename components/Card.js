import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const CardComponent = ({ source, title, description, alt, onClick }) => {
	return (
		<Card
			sx={{ maxWidth: "90%", my: 4 }}
			style={{ cursor: "pointer", height: "460px" }}
			onClick={onClick}
		>
			<CardMedia component="img" height="300" image={source} alt={alt} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography mt={2} variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CardComponent
