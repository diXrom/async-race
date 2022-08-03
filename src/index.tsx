import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';

import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <CssBaseline>
    <Provider store={store}>
      <App />
    </Provider>
  </CssBaseline>
);
