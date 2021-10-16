import { Component } from 'react'
import { mapStateToProps, mapDispatchToProps, cookies, cookieDecoder } from '../../app/functions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Props, UserData, Path } from '../../interface/Interfaces'



class Navigation extends Component<Props, UserData> {
    
    private appName: string = 'DOMAS'
    private path: Path = {
        index: '/',
        login: '/login',
        profil: '/profil',
        info: '/info'
    }

    constructor(props: Props){
        super(props)
        this.state = {}
    }

    componentDidMount = () => {
        const decode = cookieDecoder()
        if(decode){
            this.setState({ path: decode.username })
        }
    }

    logOut = (): void => {
        this.props.reset()
        cookies.remove('token')
        cookies.remove('refreshToken')
        this.props.history.push('/')
    }

    userLogedIn = (isLogin: boolean): JSX.Element => {

        const { dataLogin } = this.props.persist
        const { pathname } = this.props.location

        return isLogin === false ? 
            <>
                <Nav.Link href="/data">Data</Nav.Link>
                <Nav.Link href= { this.path.info }>Info</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                    <NavDropdown.Item href="">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={ this.path.login }>Login</NavDropdown.Item>
                </NavDropdown>
            </> :
        <>
            <Nav.Link>{ dataLogin!.username }</Nav.Link>
            <Nav.Link href={`/${this.state.path}`} active={ pathname === `/${this.state.path}` } >Home</Nav.Link>
            <Nav.Link>Statistik desa</Nav.Link>
            <Nav.Link href={`/${this.state.path}/data`} active={ pathname === `/${this.state.path}/data` }>Data</Nav.Link>
            <NavDropdown active={ pathname === `/${this.state.path}/input` } title="Activity" id="basic-nav-dropdown">
                <NavDropdown.Item href={`/${this.state.path}/input`} >Input Data</NavDropdown.Item>
                <NavDropdown.Item href="">Value</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={ this.logOut }>Logout</NavDropdown.Item>
            </NavDropdown>
        </>
    }

    render = (): JSX.Element => {

        const { isLogin } = this.props.persist

        return (
            <div className="navigation">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">{ this.appName } Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            { this.userLogedIn(isLogin!) }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))