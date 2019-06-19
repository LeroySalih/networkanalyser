import { IReporter} from './reporter'
import { IGraphNode } from './graph-node'

export interface IGraphEdge {
  id: string;
} 

export class GraphEdge implements IGraphEdge, IReporter {

  constructor (public n1: IGraphNode, 
               public n2: IGraphNode, 
               public weight: Number){
    
  }

  public get id() :string {
    const ids = [this.n1.id, this.n2.id].sort()

    return `${ids[0]}-${ids[1]}`;
  }

  public get report(): string {
    return `<Edge n1:'${this.n1.id}' n2:'${this.n2.id}'>`
  }

}