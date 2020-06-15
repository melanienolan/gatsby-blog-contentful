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
        }
      }
    }
  `)
  return data.allContentfulBlogPost.nodes.map(blogPost => ({
    slug: blogPost.slug,
    title: blogPost.title,
    description: blogPost.description.description,
  }))
}

export default useBlogPosts
