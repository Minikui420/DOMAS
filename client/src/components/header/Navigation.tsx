import { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../../app/functions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Props, Path } from '../../interface/Interfaces'



class Navigation extends Component<Props> {
    
    private pathname: string = this.props.location.pathname
    private appName: string = 'DOMAS'
    private path: Path = {
        index: '/',
        login: '/login',
        profil: '/profil',
        info: '/info'
    }

    logOut = (): void => {
        this.props.setIsLogin(false)
        this.props.history.push('/')
    }

    userLogedIn = (isLogin: boolean): JSX.Element => {

        return isLogin === false ? 
            <>
                <Nav.Link href="/data">Data</Nav.Link>
                <Nav.Link href= { this.path.info }>Info</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={ this.path.login }>Login</NavDropdown.Item>
                </NavDropdown>
            </> :
        <>
            <Nav.Link>Your profile</Nav.Link>
            <Nav.Link>Statistik desa</Nav.Link>
            <Nav.Link onClick={ this.logOut }>Logout</Nav.Link>
        </>
    }

    render = (): JSX.Element => {

        const { isLogin, dataLogin } = this.props.persist

        console.log(dataLogin)

        return (
            <div className="navigation">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">{ this.appName } Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            { this.userLogedIn(isLogin) }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))