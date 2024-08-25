import React from "react"
import Image from "next/legacy/image"

export const ImageProfile = (props) => {
	return (
		<Image
			src={"/images/new-profile.jpg"}
			alt={props.alt}
			width={props.width}
			height={props.height}
			style={{
				borderRadius: "50%",
			}}
			objectFit="cover"
		/>
	)
}
