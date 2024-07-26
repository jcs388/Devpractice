import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';

const fName = 'Jaden';
const lName = 'Soroka';

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <h1>Hello {fName} {lName}</h1>
        <p>Your lucky number is {Math.floor(Math.random() * 9)}</p>
    </div>
);

// root.render(<App />);
