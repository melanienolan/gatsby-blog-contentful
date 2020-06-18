import { useStaticQuery, graphql } from "gatsby"

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        nodes {
          slug
          title
          description
          publishDate
          body {
            json
          }
          image {
            fluid(maxWidth: 100, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return data.allContentfulBlogPost.nodes.map(blogPost => ({
    slug: blogPost.slug,
    title: blogPost.title,
    description: blogPost.description,
    date: blogPost.publishDate,
    body: blogPost.body.json,
    image: blogPost.image.fluid,
  }))
}

export default useBlogPosts
