import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import usePerson from "../hooks/usePerson"

export default () => {
  const person = usePerson()
  console.log(person)
  return (
    <Layout>
      <Container>
        <PageTitle>About {person.name}</PageTitle>
        <p>{person.bio}</p>
      </Container>
    </Layout>
  )
}
