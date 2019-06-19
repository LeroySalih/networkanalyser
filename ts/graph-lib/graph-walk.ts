


import {GraphEdge} from './graph-edge'

// a walk an ordered collection of edges
// a path: no vertex is visted more than once, but edges may be visited multiple times
// a trail: no edge visited more than once, but nodes may be visited multiple times
// a tour: visits every node in a graph 
// a cycle: start and end vertex are the same, and no other vertex is visited more thqan once.
// a Hamiltonian cycle: cycle that visits every node.


export class GraphWalk {
  
  edges: GraphEdge[] = []

  constructor() {

  }

  addEdge(edge: GraphEdge) {
    console.log(edge);
    
    // if this is the first edge, add the id's
    if (this.edges.length == 0)
    {
      this.edges.push(edge)
      return true;
    }
    // look at the last edge in the walk.
    const lastEdge = this.edges[this.edges.length - 1];

    // ensure that the new edge joins on from the last.  If it doesn't  join on, 
    // return false without adding.

    if (edge.n1.id != lastEdge.n2.id){
      return false;
    }

    // add the edge
    this.edges.push(edge)
    return true
    
  }

  get isPath(): boolean {

    return false;
  }
}
