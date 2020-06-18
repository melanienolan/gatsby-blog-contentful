import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"

export const query = graphql`
  query($slug: String!) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      description
      image {
        fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const PostTemplate = ({ data: { blogPost } }) => (
  <Layout>
    <Container>
      <div className="relative pb-2/3 mx-auto">
        <Img
          className="w-full h-full object-cover"
          alt={blogPost.title}
          style={{ position: "absolute" }}
          fluid={blogPost.image.fluid}
        />
      </div>
      <PageTitle>{blogPost.title}</PageTitle>
      <p className="p-4 text-gray-800">{blogPost.description}</p>
      <Link to="/blog">
        <p className="m-4 text-purple-500 font-suez">&larr; Back to Blog</p>
      </Link>
    </Container>
  </Layout>
)

export default PostTemplate
