
import {GraphNetwork} from './graph-lib/graph-network';
import {GraphRenderer} from './graph-lib/graph-renderer';
import {GraphWalk} from './graph-lib/graph-walk';

export class NetworkAnalyserApp {

  static run(): void {
    console.log('Running');

    const nw1 = new GraphNetwork();
    const n1 = nw1.createNode('A', 100, 100);
    const n2 = nw1.createNode('B', 200, 200);
    const n3 = nw1.createNode('C', 100, 200);
    const n4 = nw1.createNode('D', 150, 250);

    const edgeAB = nw1.joinNodes('A', 'B', 6)
    const edgeBC = nw1.joinNodes('B', 'C', 4)
    const edgeBD = nw1.joinNodes('B', 'D', 4)
    const edgeCD = nw1.joinNodes('C', 'D', 4)


    const walk = new GraphWalk()
    walk.addEdge(edgeAB);
    walk.addEdge(edgeBC);
    console.log(walk.report)

    GraphRenderer.render(nw1, 'canvas');

    var elem = document.getElementById('lblNodeCount');
    elem.innerHTML = nw1.nodes.length

    elem = document.getElementById('lblNodeAdegree');
    elem.innerHTML = nw1.degree('A')

    elem = document.getElementById('lblWalkNnodes')
    elem.innerHTML = walk.report

  }
}