import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import PostPreview from "../components/PostPreview"
import usePerson from "../hooks/usePerson"
import useBlogPosts from "../hooks/useBlogPosts"

export default () => {
  const blogLimit = 3
  const person = usePerson()
  const blogPosts = useBlogPosts().slice(0, blogLimit)

  return (
    <Layout>
      <Container>
        <div
          className="mx-auto rounded-full overflow-hidden border-4 border-purple-500"
          style={{ width: 160, height: 160 }}
        >
          <Img fluid={person.image} />
        </div>
        <PageTitle>{person.name}</PageTitle>
        <p className="text-center text-gray-800">{person.bio}</p>
        <h3 className="m-4 py-2 border-b-2 border-purple-500 text-purple-500 text-lg font-semibold font-suez">
          Latest posts
        </h3>
        <ul className="flex flex-wrap justify-around content-center">
          {blogPosts.map(post => (
            <PostPreview post={post} />
          ))}
        </ul>
        <Link to="/blog">
          <p className="m-4 text-purple-500 font-suez">See more &rarr;</p>
        </Link>
      </Container>
    </Layout>
  )
}
