/* eslint-disable react/react-in-jsx-scope */
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
);
