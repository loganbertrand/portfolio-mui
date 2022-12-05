import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"
import { Container } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MailOutlineIcon from "@mui/icons-material/MailOutline"

export default function Copyright() {
	return (
		<Container sx={{ my: "1%" }}>
			<Typography variant="body2" color="text.secondary" align="center">
				{"Copyright © "}
				<MuiLink color="inherit" href="https://loganbertrand.com/">
					Logan Bertrand
				</MuiLink>{" "}
				{new Date().getFullYear()}.
			</Typography>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					marginTop: "3%",
					gap: "1%",
				}}
			>
				<a
					href="mailto:loganwbertrand@gmail.com"
					style={{ color: "black" }}
				>
					<MailOutlineIcon fontSize="medium" />
				</a>
				<a
					href="https://github.com/loganbertrand"
					style={{ color: "black" }}
					target="_blank"
				>
					<GitHubIcon fontSize="medium" />
				</a>
				<a
					href="https://www.linkedin.com/in/logan-bertrand-/"
					style={{ color: "black" }}
					target="_blank"
				>
					<LinkedInIcon fontSize="medium" />
				</a>
			</div>
		</Container>
	)
}
