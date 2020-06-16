exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create pages", JSON.stringify(result.errors))
  }
  const blogPosts = result.data.allContentfulBlogPost.nodes

  blogPosts.forEach(blogPost => {
    actions.createPage({
      path: `/blog/${blogPost.slug}/`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        slug: blogPost.slug,
      },
    })
  })
}
