import {createRoot} from 'react-dom/client';
import App from "./App";
import "./styles/index.scss";

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App/>);
}
