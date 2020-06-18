import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import PostPreview from "../components/PostPreview"
import useBlogPosts from "../hooks/useBlogPosts"

export default () => {
  const blogPosts = useBlogPosts()

  return (
    <Layout>
      <Container>
        <PageTitle>Blog</PageTitle>
        <ul className="flex flex-wrap justify-around content-center">
          {blogPosts.map(post => (
            <PostPreview post={post} />
          ))}
        </ul>
      </Container>
    </Layout>
  )
}
