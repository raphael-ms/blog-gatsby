import { Link } from "gatsby"
import React from "react"
import PostCard from "./post-card"

const PostsGrid = ({ posts }) => {
  const { nodes } = posts
  console.log(nodes)
  return (
    <section className="container mt-12">
      <h1 className="font-sans text-3xl text-purple-700 font-bold">POSTS</h1>
      <div className="mt-12 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {nodes.map((post, idx) => (
          <PostCard key={idx} index={idx} post={post} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          className="flex items-center justify-center w-52 text-center h-10 bg-purple-700 text-white self-center rounded-full cursor-pointer hover:shadow-lg hover:bg-purple-600 hover:scale-105 duration-700"
          to={`/posts`}
        >
          VER MAIS
        </Link>
      </div>
    </section>
  )
}

export default PostsGrid
