import { useStaticQuery, graphql } from "gatsby"

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        nodes {
          slug
          title
          description {
            description
          }
          heroImage {
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
    description: blogPost.description.description,
    image: blogPost.heroImage.fluid,
  }))
}

export default useBlogPosts
