import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import TextBox from "../components/TextBox"

export const query = graphql`
  query($slug: String!) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      body {
        json
      }
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
      <div className="max-w-screen-sm mx-auto">
        <div className="relative pb-2/3">
          <Img
            className="w-full h-full object-cover"
            alt={blogPost.title}
            style={{ position: "absolute" }}
            fluid={blogPost.image.fluid}
          />
        </div>
      </div>
      <PageTitle>{blogPost.title}</PageTitle>
      <TextBox>
        {documentToReactComponents(blogPost.body.json, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => (
              <p className="mb-4">{children}</p>
            ),
          },
        })}
      </TextBox>
      <Link to="/blog">
        <p className="m-4 text-purple-500 font-suez">&larr; Back to Blog</p>
      </Link>
    </Container>
  </Layout>
)

export default PostTemplate
