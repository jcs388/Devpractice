import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';

const name = 'Jaden Soroka';
const year = new Date().getFullYear();

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <p>Created by {name}</p>
        <p>Copyright @ {year}</p>
    </div>
);

// root.render(<App />);
