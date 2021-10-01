// import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store, persistore } from './app/store'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'

ReactDOM.render(
  // <StrictMode>
    <Router>
      <Switch>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistore} >
            <Route component={App} />
          </PersistGate>
        </Provider>
      </Switch>
    </Router>,
  // </StrictMode>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
