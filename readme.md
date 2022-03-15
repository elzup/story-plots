| from               | to                     | use        | browser | node       |
| ------------------ | ---------------------- | ---------- | ------- | ---------- |
| mermaid flowchart  | `{ nodes, edges }`     | mermaid    | o       | x (why...) |
| mermaid flowchart  | rendering(svg)         | mermaid    | o       | -          |
| mermaid flowchart  | layout                 | mermaid    | o       | x (why...) |
| `{ nodes, edges }` | layout                 | ELKjs      | o       | o          |
| layout             | rendering(interactive) | React-Flow | o       | -          |

```
%%%subgraph グラフの見方;
A[原因]-->|備考|B[結果]
C[原因] -.->D[偶発]
E[原因]  -.- o F[心理的影響]
G[原因]  x-.- x H[対比,オマージュ]
%%%end;
```
