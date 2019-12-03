class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
  }

  addVertex(v) {
    this.AdjList.set(v, [])
  }

  addEdge(v, w){
    this.AdjList.get(v).push(w)
    //for undirected graphs, it goes both ways
    this.AdjList.get(w).push(v)
  }

  printGraph() {
    let keys = this.AdjList.keys()

    for (let i of keys) { //go through keys
      let values = this.AdjList.get(i)
      let conc = ''
      for (let j of values) { //for each key, go through their array of adjacent vertices
        conc += j + ' '
      }
      console.log(i + ' => ' + conc)
    }
  }
}

let g = new Graph(6) //6 vertices
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'] //list of vertices

for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i])
}

g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('A', 'E')
g.addEdge('B', 'C')
g.addEdge('D', 'E')
g.addEdge('E', 'F')
g.addEdge('E', 'C')
g.addEdge('C', 'F')

g.printGraph()
