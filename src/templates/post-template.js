import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      description {
        description
      }
    }
  }
`

const PostTemplate = ({ data: { blogPost } }) => (
  <Layout>
    <h1>{blogPost.title}</h1>
    <p>{blogPost.description.description}</p>

    <Link to="/">&larr; Back to Home</Link>
  </Layout>
)

export default PostTemplate
