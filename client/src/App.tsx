import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Props, State, UserData } from './interface/Interfaces'
import { cookies, mapStateToProps } from './app/functions'
import { connect } from 'react-redux'
import Index from './pages/Index'
import Login from './pages/Login'
import Home from './pages/Home'
import Input from './pages/Input'
import Data from './pages/Data'
import jwtDecode from 'jwt-decode'
import './assets/css/App.css'


class App extends Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    const token = cookies.get('token')
    if(token){
      const decode: UserData = jwtDecode(token)
      this.setState({ path: decode.username })
    }
  }
  
  render = (): JSX.Element => {

    const { pathname } = this.props.location
    const path = this.state.path === undefined ? this.props.persist.path : this.state.path

    switch (pathname) {
      case '/login':     
        return <Login />

      case `/${path}`:
        return <Home />

      case `/${path}/input`:
        return <Input />

      case `/${path}/data`:
        return <Data />
    
      default:
        return <Index />   
    }
  }

}

export default withRouter(connect(mapStateToProps)(App))
