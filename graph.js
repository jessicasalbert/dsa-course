class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertix(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push[v2]
        this.adjacencyList[v2].push[v1]
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2)

        this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v !== v1)
    }

    removeVertex(vertex) {
        for (const x of this.adjacencyList[vertex]) {
            this.removeEdge(x, vertex)
        }
        delete this.adjacencyList[vertex] 
    }
}