import './style.css';
import icon from '/icon.png';
import iconPublic from '../public/icon.png';

import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${icon}" class="logo vanilla" alt="TypeScript logo" />
    <img src="${iconPublic}" class="logo vanilla" alt="TypeScript logo" />
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
