class Queue {
  constructor() {
    this.arr = []
  }

  enqueue(element) {
    this.arr.push(element)
  }

  dequeue(element) {
    return this.arr.shift()
  }

  isEmpty() {
    if (this.arr.length > 0) {
      return false
    }
    return true
  }
}

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

  //start from one node and queue all of it's adjacent nodes
  //then recursively work until you're all done
  bfs(startingNode) {
    let visited = {}

    for (let key of this.AdjList.keys()) {
      visited[key] = false
    }

    let queue = new Queue()
    visited[startingNode] = true
    queue.enqueue(startingNode)

    while (!queue.isEmpty()) {
      let queueElement = queue.dequeue()

      console.log(queueElement)

      let adjList = this.AdjList.get(queueElement)
      for (let i = 0; i < adjList.length; i++) {
        let newElement = adjList[i]
        if (!visited[newElement]) {
          visited[newElement] = true
          queue.enqueue(newElement)
        }
      }
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

// g.printGraph()

g.bfs('A')
