import './css/style.css'
import { setupScanner } from './scanner.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="reader" style="width: 600px;"></div>
    <div id="result"></div>
  </div>
`

setupScanner('reader')
