import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CusApp from './CusApp'
import AdminApp from './AdminApp'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <CusApp />
        <App />
      {/* <AdminApp /> */}
       
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
