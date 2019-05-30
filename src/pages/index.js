import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import moment from "moment"
import Helmet from "react-helmet"

import "./index.css"

const RED = "rgb(203, 36, 49)"
const GREEN = "rgb(40, 167, 69)"
const PURPLE = "rgb(102, 51, 153)"
const GOLD = "rgb(255, 182, 30)"

const StatChart = ({ data, xKey, color }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <Tooltip labelFormatter={time => moment.unix(time).format("llll")} />
        <Legend />
        <Line
          type="monotone"
          dataKey={xKey}
          stroke={color}
          dot={{
            stroke: color,
            strokeWidth: 1,
            fill: color,
          }}
        />
        <XAxis
          dataKey="timestamp"
          tickFormatter={time => moment.unix(time).format("ll")}
          minTickGap={20}
        />
        <YAxis interval={0} domain={["dataMin - 10", "dataMax + 10"]} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  )
}

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

  let nodes = data.allDataJson.nodes
  nodes.reverse()

  return (
    <Fragment>
      <Helmet title="Gatsby Stats" />
      <header>
        <h1>Gatsby Stats</h1>
      </header>

      <main>
        <div className="container">
          <section>
            <h2>Open Issues</h2>
            <StatChart data={nodes} xKey="openIssues" color={GREEN} />
          </section>
          <section>
            <h2>Closed Issues</h2>
            <StatChart data={nodes} xKey="closedIssues" color={RED} />
          </section>
          <section>
            <h2>Open PRs</h2>
            <StatChart data={nodes} xKey="openPRs" color={GREEN} />
          </section>
          <section>
            <h2>Merged PRs</h2>
            <StatChart data={nodes} xKey="mergedPRs" color={PURPLE} />
          </section>
          <section>
            <h2>Closed PRs</h2>
            <StatChart data={nodes} xKey="closedPRs" color={RED} />
          </section>
          <section>
            <h2>Stars</h2>
            <StatChart data={nodes} xKey="stars" color={GOLD} />
          </section>
          <section>
            <p>This is the stats for the GitHub repo over the last two weeks</p>
            <p>
              GitHub Repo:
              <a href="https://github.com/lannonbr/gatsby-github-stats/">
                lannonbr/gatsby-github-stats
              </a>
            </p>
          </section>
        </div>
      </main>
    </Fragment>
  )
}
