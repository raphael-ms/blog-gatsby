import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/post/${article.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <GatsbyImage
        image={getImage(article.mainImage?.localFile)}
        alt={article.mainImage?.alternativeText}
      />
      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{article.title}</h3>
        <p className="mt-2 text-neutral-500 line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  )
}

export default ArticleCard