import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      text {
        json
      }
    }
  }
`

const PostTemplate = ({ data: { blogPost } }) => (
  <Layout>
    <h1>{blogPost.title}</h1>

    <p>{documentToReactComponents(blogPost.text.json)}</p>
    <Link to="/">&larr; Back to Home</Link>
  </Layout>
)

export default PostTemplate
