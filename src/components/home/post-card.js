import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostCard = ({ post, index }) => {
  return (
    <div>
      <Link
        to={`/post/${post.slug}`}
        className="flex 
        divide-y-reverse 
        overflow-hidden 
        max-h-72 
        mt-9 
        rounded-lg 
        bg-white 
        shadow-sm 
        transition-shadow 
        hover:shadow-md
        hover:opacity-90
        duration-500"
      >
        {index % 2 === 0 && (
          <GatsbyImage
            className="w-1/2 object-contain"
            image={getImage(post.mainImage?.localFile)}
            alt={post.mainImage?.alternativeText}
          />
        )}
        <div className="px-4 py-4 w-1/2">
          <h3 className="font-bold text-xl text-neutral-700 uppercase">
            {post.title}
          </h3>
          <p className="mt-5 text-neutral-500 line-clamp-6">{post.body}</p>
        </div>
        {index % 2 !== 0 && (
          <GatsbyImage
            className="w-1/2 object-contain"
            image={getImage(post.mainImage?.localFile)}
            alt={post.mainImage?.alternativeText}
          />
        )}
      </Link>
      <div className="mt-10 border-b-2 m-auto w-3/4 border-pink-400"></div>
    </div>
  )
}

export default PostCard
