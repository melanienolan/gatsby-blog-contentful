import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import TextBox from "../components/TextBox"
import usePerson from "../hooks/usePerson"

export default () => {
  const person = usePerson()

  return (
    <Layout>
      <Container>
        <PageTitle>About {person.name}</PageTitle>
        <TextBox>
          {documentToReactComponents(person.description, {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (_node, children) => (
                <p className="mb-4">{children}</p>
              ),
            },
          })}
        </TextBox>
      </Container>
    </Layout>
  )
}
