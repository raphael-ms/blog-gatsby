import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutSection = ({ profile, about }) => {
  return (
    <section className="mt-6 bg-neutral-200">
      <div className="container pt-10">
        <h1 className="font-sans text-3xl text-pink-400 font-bold">SOBRE</h1>
        <div className="flex">
          <div className="w-2/3">
            <p className="mt-5">{about}</p>
          </div>
          <div className="flex justify-end w-1/2 mb-16">
            <GatsbyImage
              className="w-96  rounded-full"
              image={getImage(profile.localFile)}
              alt={profile.alternativeText}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
