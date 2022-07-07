import React from "react"

const Tags = ({ tags }) => {
    console.log('Tags: ', tags)
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tags.map(tag => (
        <p key={tag.name}>{tag.name}</p>
      ))}
    </div>
  )
}

export default Tags
