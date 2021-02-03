class Graph {
    constructor() {
        this.adjecencyList = {}
    }

    addVertix(name) {
        this.adjecencyList[name] = [];
    }
}