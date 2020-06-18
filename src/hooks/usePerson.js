import { useStaticQuery, graphql } from "gatsby"

const usePerson = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPerson {
        nodes {
          name
          title
          shortBio {
            shortBio
          }
          description {
            json
          }
          image {
            fluid(maxWidth: 100, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          github
          email
          twitter
        }
      }
    }
  `)

  return {
    name: data.allContentfulPerson.nodes[0].name,
    title: data.allContentfulPerson.nodes[0].title,
    bio: data.allContentfulPerson.nodes[0].shortBio.shortBio,
    description: data.allContentfulPerson.nodes[0].description.json,
    image: data.allContentfulPerson.nodes[0].image.fluid,
    github: data.allContentfulPerson.nodes[0].github,
    email: data.allContentfulPerson.nodes[0].email,
    twitter: data.allContentfulPerson.nodes[0].twitter,
  }
}

export default usePerson
