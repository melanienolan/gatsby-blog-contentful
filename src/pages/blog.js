import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"
import Container from "../components/Container.js"
import PostPreview from "../components/PostPreview"
import useBlogPosts from "../hooks/useBlogPosts"

export default () => {
  const blogPosts = useBlogPosts()
  return (
    <Layout>
      <Container>
        <ul className="flex flex-wrap justify-around content-center">
          {blogPosts.map(post => (
            <PostPreview post={post} />
          ))}
        </ul>
      </Container>
    </Layout>
  )
}
