// Import stylesheets
import './style.css';
import {NetworkAnalyserApp} from './ts/app'

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Network Analyser</h1>`;

NetworkAnalyserApp.run()
//const app = new NetworkAnalyserApp()
//app.run()



