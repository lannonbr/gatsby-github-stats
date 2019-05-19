let points = window.data;

function createGraph(elem, field, color) {
  let xArr = [];
  let timesArr = [];

  for (let point of points) {
    const { timestamp } = point;
    const fieldEntry = point[field];
    timesArr.push(timestamp);
    xArr.push(fieldEntry);
  }

  let chartColors = {};
  chartColors[field] = color;

  const chart = c3.generate({
    bindto: elem,
    data: {
      x: "x",
      columns: [["x", ...timesArr], [field, ...xArr]],
      colors: chartColors
    },
    axis: {
      x: {
        tick: {
          format: function(d) {
            return moment.unix(d).format("llll");
          }
        }
      }
    }
  });
}

createGraph("#op_issue_chart", "openIssues", "#28A745");
createGraph("#closed_issue_chart", "closedIssues", "#CB2431");
createGraph("#op_pr_chart", "openPRs", "#28A745");
createGraph("#merged_pr_chart", "mergedPRs", "#663399");
createGraph("#close_pr_chart", "closedPRs", "#CB2431");
createGraph("#stars", "stars", "#ffb61e");
