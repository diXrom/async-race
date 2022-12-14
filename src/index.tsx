import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <CssBaseline>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </CssBaseline>
);
