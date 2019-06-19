
import {IGraphEdge} from './graph-edge';
import {IGraphNode} from './graph-node';
import {GraphNetwork} from './graph-network'

export class GraphRenderer {
  static render (nw: GraphNetwork, canvasId: string): void {

    // get the canvas
    const canvas:SVGSVGElement = <any>document.getElementById(canvasId);

    // clear the canvas

    // render the edges
    nw.edges.forEach(edge => {
      GraphRenderer.renderEdge(edge, canvas);
    });

    // render the nodes
    nw.nodes.forEach(node => {
      GraphRenderer.renderNode(node, canvas);
    });

  }

  static renderNode (node: IGraphNode, canvas: SVGSVGElement): void {
    
    const circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleElement.setAttribute("cx", node.x);
    circleElement.setAttribute("cy", node.y);
    circleElement.setAttribute("r", "10");
    circleElement.setAttribute("fill", 'red');
    circleElement.setAttribute("style", 'stroke:rgb(255,0,0);stroke-width:2');

    
    console.log(circleElement.innerHTML)
    canvas.appendChild(circleElement);

    GraphRenderer.renderText(node.id, node.x, node.y, canvas)
  }

  static renderEdge (edge: IGraphEdge, canvas: SVGSVGElement): void {
    
    const lineElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineElement.setAttribute("x1", edge.n1.x);
    lineElement.setAttribute("y1", edge.n1.y);
    lineElement.setAttribute("x2", edge.n2.x);
    lineElement.setAttribute("y2", edge.n2.y);
    lineElement.setAttribute("style", 'stroke:rgb(0,0,0);stroke-width:3');

    canvas.appendChild(lineElement);
    const mx = edge.n1.x + ((edge.n2.x - edge.n1.x) / 2)
    const my = edge.n1.y + ((edge.n2.y - edge.n1.y) / 2)

    GraphRenderer.renderText(edge.weight, mx, my - 10, canvas)
  }

  static renderText (text:string, x: number, y: number, elem:any): void{

    var element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    element.setAttributeNS(null, 'x', `${x}`);
    element.setAttributeNS(null, 'y', `${y}`);
    // text-anchor="middle" alignment-baseline="central"
    element.setAttributeNS(null, 'text-anchor', `middle`);
    element.setAttributeNS(null, 'alignment-baseline', 'central');
    var txt = document.createTextNode(text);
    element.appendChild(txt);
    elem.appendChild(element);

  }


}