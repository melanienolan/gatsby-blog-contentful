import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import TextBox from "../components/TextBox"
import PostPreview from "../components/PostPreview"
import Logo from "../components/Logo"
import usePerson from "../hooks/usePerson"
import useBlogPosts from "../hooks/useBlogPosts"

export default () => {
  const blogLimit = 3
  const person = usePerson()
  const blogPosts = useBlogPosts().slice(0, blogLimit)

  return (
    <Layout>
      <Container>
        <div className="relative mx-auto w-64 h-64 flex justify-center items-center">
          <Logo fill="#9f7aea" className="w-64 h-64 absolute inset-0" />
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500">
            <Img fluid={person.image} />
          </div>
        </div>

        <PageTitle>
          {person.name}
          <br />
          <span className="-mt-2 block text-sm font-sans uppercase text-gray-600">
            {person.title}
          </span>
        </PageTitle>
        <TextBox>
          <p className="text-center text-gray-800">{person.bio}</p>
        </TextBox>
        <h3 className="mx-4 mt-12 mb-8 py-2 border-b-2 border-purple-500 text-purple-500 text-lg font-semibold font-suez">
          Latest posts
        </h3>
        <ul className="flex flex-wrap justify-around content-center">
          {blogPosts.map(post => (
            <PostPreview post={post} key={post.slug} />
          ))}
        </ul>
        <Link to="/blog">
          <p className="m-4 text-purple-500 font-suez">See more &rarr;</p>
        </Link>
      </Container>
    </Layout>
  )
}
