import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App';
import './styles/main.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);