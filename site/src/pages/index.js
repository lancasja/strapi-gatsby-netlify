import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      {data.allStrapiScales.nodes.map((doc, i) => (
        <div key={i}>{doc.name}</div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiScales {
      nodes {
        name
        intervals
      }
    }
  }
`
