import ReactDOM from 'react-dom';
// import FirtsApp from './compontents/FirtsApp';
import './styles/index.css'
import CounterApp from './compontents/CounterApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={5} />, divRoot);