import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
// import './topic/01-basic-types';
// import './topic/02-object-interfaces';
//import './topic/03-functions';
// import './topic/04-homeworks-types';
import './topic/05-basic-destructuring';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <p>
      hola mundo
    </p>
  </div>
`
