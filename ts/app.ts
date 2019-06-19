
import {GraphNetwork} from './graph-lib/graph-network';
import {GraphRenderer} from './graph-lib/graph-renderer';
import {GraphWalk} from './graph-lib/graph-walk';

export class NetworkAnalyserApp {

  static run(): void {
    console.log('Running');

    const nw1 = new GraphNetwork();
    const n1 = nw1.createNode('A', 100, 100);
    const n2 = nw1.createNode('B', 200, 200);
    const n3 = nw1.createNode('C', 150, 200);

    const edgeAB = nw1.joinNodes('A', 'B', 6)
    const edgeAC = nw1.joinNodes('A', 'C', 4)

    console.log('edgeAC', edgeAC)
    console.log('edgeAB reports:', edgeAB.report)
    console.log('edgeAC reports:', edgeAC.report)

    const walk = new GraphWalk()
    walk.addEdge(edgeAB);
    walk.addEdge(edgeAC);

    GraphRenderer.render(nw1, 'canvas');

    const elem = document.getElementById('lblNodeCount');
    elem.innerHTML = nw1.nodes.length

    elem = document.getElementById('lblNodeAdegree');
    elem.innerHTML = nw1.degree('A')

  }
}