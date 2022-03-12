import Elkjs from 'elkjs'
import { readFileSync } from 'fs'
// import mermaid from 'mermaid'
//
// function getGraphMermaid(mmd) {
//   mermaid.mermaidAPI.initialize(config)
//   const {
//     parser: { yy },
//   } = mermaid.mermaidAPI.parse(mmd)
//
//   console.log(yy)
//
//   const ves = {
//     vertices: yy.getVertices(),
//     edges: yy.getEdges(),
//   }
// }

function makeLayout(vertices, edges) {
  const elk = new Elkjs()
  return elk.layout({
    id: 'root',
    layoutOptions: { 'elk.algorithm': 'layered' },
    // children: vertices.map(v => ({id: v.id}))
    edges: edges.map((e) => ({
      id: `e${e.start}-${e.end}`,
      sources: [e.start],
      targets: [e.end],
    })),
  })
}
const config = {
  startOnLoad: true,
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
    curve: 'cardinal',
  },
  securityLevel: 'loose',
}

const getNodes = async (mmd) => {
  const flows = await makeLayout(Object.values(ves.vertices), ves.edges)

  return { ...ves, flows }
}

async function main() {
  const file = process.argv[2]
  if (!file) return

  const data = readFileSync(file, 'utf8')
  console.log(data)
  const res = getNodes(data)
  console.log(res)
}

main()
