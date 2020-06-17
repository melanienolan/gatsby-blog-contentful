import { useStaticQuery, graphql } from "gatsby"

const usePerson = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPerson {
        nodes {
          shortBio {
            shortBio
          }
          name
          github
          facebook
          email
          twitter
        }
      }
    }
  `)
  return {
    name: data.allContentfulPerson.nodes[0].name,
    bio: data.allContentfulPerson.nodes[0].shortBio.shortBio,
    github: data.allContentfulPerson.nodes[0].github,
    email: data.allContentfulPerson.nodes[0].email,
    twitter: data.allContentfulPerson.nodes[0].twitter,
  }
}

export default usePerson
