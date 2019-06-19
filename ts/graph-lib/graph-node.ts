import { IReporter } from './reporter' 

export interface IGraphNode {
  id: string;
} 

export class GraphNode implements IGraphNode, IReporter {

  constructor (public id: string, 
               public x: number, 
               public y: number) {

  }

  public get report(): string {
    return `<Node id:'${this.id}'>`
  }
}