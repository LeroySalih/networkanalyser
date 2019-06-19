import {IGraphNode, GraphNode} from './graph-node'
import {IGraphEdge, GraphEdge} from './graph-edge'

export class GraphNetwork {

  _nodes: {[id: string] : IGraphNode } = {}
  _edges: {[id: string] : IGraphEdge } = {}

  constructor() {

  }

  setNode(node: IGraphNode): void {
    this._nodes[node.id] = node;
  }

  removeNode(node: IGraphNode): void {
    delete this._nodes[node.id];
  }

  addEdge(edge:IGraphEdge): void {
    this._edges[edge.id] = edge
  }

  // creates and adds a new node to the network
  createNode(id, x: number, y: number){
    const newNode = new GraphNode(id, x, y);
    this.setNode(newNode);
    return newNode;
  }

  getNodeById(id: string) : IGraphNode {
    
    if (this._nodes[id] == null) {
      throw new Error(`Node ${id} does not exist in network.`)
    }

    return this._nodes[id];
  }

  // creates two nodes in the network
  joinNodes(n1: string, n2: string, weight: number) {

    const node1 = this.getNodeById(n1);
    const node2 = this.getNodeById(n2);
    
    const edge = new GraphEdge(node1, node2, weight);
    
    this._edges[edge.id] = edge;
    

    return edge;
    
  }

  get nodes(): GraphNode[] {
    return Object.keys(this._nodes).map(id => this._nodes[id])
  }

  get edges(): GraphEdge[] {
    return Object.keys(this._edges).map(id => this._edges[id])
  }

  degree(nodeId:string): number {
    
    let nodeCount = 0;

    this.edges.forEach((edge:GraphNode) => {
      if (edge.n1.id == nodeId || edge.n2.id == nodeId) {
        nodeCount ++
      }
    });
    
    return nodeCount;
  }


}