import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostPreview = ({ post }) => {
  return (
    <li
      key={post.slug}
      className="m-2 w-full rounded-lg shadow overflow-hidden"
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
          <h3 className="text-base font-bold text-gray-700">{post.title}</h3>
          <p className="text-sm text-gray-800">{post.description}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview
