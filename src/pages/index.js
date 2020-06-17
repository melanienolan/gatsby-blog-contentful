import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import PostPreview from "../components/PostPreview"
import usePerson from "../hooks/usePerson"
import useBlogPosts from "../hooks/useBlogPosts"

export default () => {
  const person = usePerson()
  const blogPosts = useBlogPosts()
  return (
    <Layout>
      <Container>
        <PageTitle>{person.name}</PageTitle>
        <h3>Latest posts</h3>
        <ul className="flex flex-wrap justify-around content-center">
          {blogPosts.map(post => (
            <PostPreview post={post} />
          ))}
        </ul>
        <Link to="/blog">See more &rarr;</Link>
        <p></p>
      </Container>
    </Layout>
  )
}
