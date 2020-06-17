import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import Icon from "../components/Icon"
import usePerson from "../hooks/usePerson"

export default () => {
  const person = usePerson()
  return (
    <Layout>
      <Container>
        <PageTitle>Contact me!</PageTitle>
        <div className="flex justify-center">
          <a
            href={`https://github.com/${person.github}`}
            className="m-2 text-purple-500"
          >
            <Icon>
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </Icon>
          </a>
          <a
            href={`https://twitter.com/${person.twitter}`}
            className="m-2 text-purple-500"
          >
            <Icon>
              <path d="M16 3.038c-.6.266-1.235.44-1.885.517a3.288 3.288 0 001.443-1.816 6.576 6.576 0 01-2.085.796A3.277 3.277 0 0011.077 1.5a3.285 3.285 0 00-3.198 4.03 9.319 9.319 0 01-6.765-3.43 3.287 3.287 0 001.015 4.383 3.269 3.269 0 01-1.486-.41c-.036 1.52 1.054 2.943 2.633 3.26a3.29 3.29 0 01-1.483.055 3.285 3.285 0 003.067 2.28A6.6 6.6 0 010 13.027 9.294 9.294 0 005.032 14.5c6.095 0 9.538-5.147 9.33-9.764A6.684 6.684 0 0016 3.038z" />
            </Icon>
          </a>
          <a href={`mailto:${person.email}`} className="m-2 text-purple-500">
            <Icon>
              <path d="M1.602 4.707L8 7.906l6.398-3.199A1.6 1.6 0 0012.8 3.2H3.2a1.6 1.6 0 00-1.598 1.507z" />
              <path d="M14.4 6.494L8 9.694l-6.4-3.2V11.2a1.6 1.6 0 001.6 1.6h9.6a1.6 1.6 0 001.6-1.6V6.494z" />
            </Icon>
          </a>
        </div>
      </Container>
    </Layout>
  )
}
