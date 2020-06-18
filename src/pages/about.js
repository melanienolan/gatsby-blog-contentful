import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import usePerson from "../hooks/usePerson"

export default () => {
  const person = usePerson()

  return (
    <Layout>
      <Container>
        <PageTitle>About {person.name}</PageTitle>
        <div className="p-4 text-gray-800">
          {documentToReactComponents(person.description, {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, children) => (
                <p className="text-gray-800 mb-4">{children}</p>
              ),
            },
          })}
        </div>
      </Container>
    </Layout>
  )
}
