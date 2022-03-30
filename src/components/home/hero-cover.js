import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroCover = ({ logoImage, cover }) => {
  return (
    <header className=" min-w-[500px]">
      <GatsbyImage
        className="max-h-[25rem]"
        image={getImage(cover.localFile)}
        alt={cover.alternativeText}
      />
      <div className="absolute min-w-[380px] w-[80%] top-[20%] left-[17%] hover:scale-105 duration-700">
        <GatsbyImage
          image={getImage(logoImage.localFile)}
          alt={logoImage.alternativeText}
        />
      </div>
    </header>
  )
}

export default HeroCover
