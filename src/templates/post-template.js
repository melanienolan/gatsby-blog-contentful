import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
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
      heroImage {
        fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const PostTemplate = ({ data: { blogPost } }) => (
  <Layout>
    <h1>{blogPost.title}</h1>
    <Img fluid={blogPost.heroImage.fluid} style={{ maxWidth: 350 }} />
    <p>{documentToReactComponents(blogPost.text.json)}</p>
    <pre>{JSON.stringify(blogPost.heroImage, null, 2)}</pre>
    <Link to="/blog">&larr; Back to Blog</Link>
  </Layout>
)

export default PostTemplate
