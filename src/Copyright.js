import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"
import { Container } from "@mui/material"

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
		</Container>
	)
}
