import Elkjs from 'elkjs'
import { readFileSync } from 'fs'
import mermaidParse from 'mermaid-parse'

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
function mermaidParse(mmd) {
  mmd.split('\n').forEach((line) => {
    const m = line.match(/(-->|==>|-.->)/g)
    if (!m) return
  })
}

main()
