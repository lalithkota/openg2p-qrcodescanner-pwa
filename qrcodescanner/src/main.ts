import './css/style.css'
import { setupScanner } from './scanner.ts'

export function setupApp(rootSelector : string){
    document.querySelector<HTMLDivElement>(rootSelector)!.innerHTML = `
        <div>
            <div id="reader" style="width: 600px;"></div>
            <div id="result"></div>
        </div>
    `;
}

setupApp('#app');
setupScanner('reader');
