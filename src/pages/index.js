import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import moment from "moment"
import StatChart from "../components/StatChart"

import "./index.css"

const RED = "rgb(203, 36, 49)"
const GREEN = "rgb(40, 167, 69)"
const PURPLE = "rgb(102, 51, 153)"
const GOLD = "rgb(255, 182, 30)"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          closedIssues
          closedPRs
          mergedPRs
          openIssues
          openPRs
          stars
          timestamp
        }
      }
    }
  `)

  let nodes = data.allDataJson.nodes.sort((a, b) => a.timestamp - b.timestamp)

  let currentNode = nodes[nodes.length - 1]

  return (
    <Fragment>
      <Helmet title="Gatsby Stats" />
      <header>
        <h1>Gatsby Stats</h1>
        <p>
          Last Updated:{" "}
          {moment.unix(nodes[nodes.length - 1].timestamp).format("llll UTCZ")}
        </p>
      </header>

      <main>
        <div className="container">
          <section id="overview">
            <h2>Overview</h2>
            <ul>
              <li>
                {currentNode.openIssues}
                <p>Open Issues</p>
              </li>
              <li>
                {currentNode.closedIssues}
                <p>Closed Issues</p>
              </li>
              <li>
                {currentNode.openPRs}
                <p>Open PRs</p>
              </li>
              <li>
                {currentNode.mergedPRs}
                <p>Merged PRs</p>
              </li>
              <li>
                {currentNode.closedPRs}
                <p>Closed PRs</p>
              </li>
              <li>
                {currentNode.stars}
                <p>Stars</p>
              </li>
            </ul>
          </section>
          <section>
            <div className="heading">
              <h2>Open Issues</h2>
              <p>Latest: {nodes[nodes.length - 1].openIssues}</p>
            </div>
            <StatChart data={nodes} yKey="openIssues" color={GREEN} />
          </section>
          <section>
            <div className="heading">
              <h2>Closed Issues</h2>
              <p>Latest: {nodes[nodes.length - 1].closedIssues}</p>
            </div>
            <StatChart data={nodes} yKey="closedIssues" color={RED} />
          </section>
          <section>
            <div className="heading">
              <h2>Open PRs</h2>
              <p>Latest: {nodes[nodes.length - 1].openPRs}</p>
            </div>
            <StatChart data={nodes} yKey="openPRs" color={GREEN} />
          </section>
          <section>
            <div className="heading">
              <h2>Merged PRs</h2>
              <p>Latest: {nodes[nodes.length - 1].mergedPRs}</p>
            </div>
            <StatChart data={nodes} yKey="mergedPRs" color={PURPLE} />
          </section>
          <section>
            <div className="heading">
              <h2>Closed PRs</h2>
              <p>Latest: {nodes[nodes.length - 1].closedPRs}</p>
            </div>
            <StatChart data={nodes} yKey="closedPRs" color={RED} />
          </section>
          <section>
            <div className="heading">
              <h2>Stars</h2>
              <p>Latest: {nodes[nodes.length - 1].stars}</p>
            </div>
            <StatChart data={nodes} yKey="stars" color={GOLD} />
          </section>
          <section>
            <p>
              These are statistics for the{" "}
              <a href="https://github.com/gatsbyjs/gatsby">gatsbyjs/gatsby</a>{" "}
              GitHub repo over the last two weeks
            </p>
            <p>
              Source:{" "}
              <a href="https://github.com/lannonbr/gatsby-github-stats/">
                https://github.com/lannonbr/gatsby-github-stats
              </a>
            </p>
          </section>
        </div>
      </main>
    </Fragment>
  )
}
