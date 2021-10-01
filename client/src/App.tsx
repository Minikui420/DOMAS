import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Props } from './interface/Interfaces'
import { mapStateToProps } from './app/functions'
import { connect } from 'react-redux'
import Index from './pages/Index'
import Login from './pages/Login'
import Home from './pages/Home'
import './assets/css/App.css'

class App extends Component<Props> {
  
  render = (): JSX.Element => {

    const { pathname } = this.props.location

    switch (pathname) {
      case '/login':     
        return <Login />

      case '/home':
        return <Home />
    
      default:
        return <Index />   
    }
  }

}

export default withRouter(connect(mapStateToProps)(App))
