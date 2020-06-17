import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostPreview = ({ post }) => {
  return (
    <li
      key={post.slug}
      className="my-4 w-full rounded-lg shadow overflow-hidden"
      style={{ maxWidth: 320 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative pb-2/3">
          <Img
            className="w-full h-full object-cover"
            alt={post.title}
            style={{ position: "absolute" }}
            fluid={post.image}
          />
        </div>

        <div className="p-4">
          <h2 className="text-base font-bold">{post.title}</h2>
          <p className="text-sm">{post.description}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview
