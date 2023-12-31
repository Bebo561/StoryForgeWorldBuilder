import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './Pages/redux/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
