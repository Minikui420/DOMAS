import { Props, UserData } from '../interface/Interfaces'
import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router'
import { mapStateToProps, mapDispatchToProps, cookies } from '../app/functions'
import { Button, Card, Container } from 'react-bootstrap'
import Navigation from '../components/header/Navigation'
import jwtDecode from 'jwt-decode'
import Api from '../api/Api'
import '../assets/css/home.css'



class Home extends Component<Props, UserData> {

    constructor(props: Props){
        super(props)
        this.state = {}
    }

    static getDerivedStateFromProps = async (props: Props, state: UserData) => {
        try {
            const api = new Api()
            const home: UserData = await api.get('/home')
            console.log(home)
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = async () => {
        const { isLogin } = this.props.persist
        const token: string = cookies.get('token')
        if(isLogin === false || isLogin === undefined) {
            this.props.history.push('/')
        }
        const decode: UserData = jwtDecode(token)
        const { id, username, picture, isAdmin, createdAt } = decode
        this.setState({ id, username, picture, isAdmin, createdAt })
        this.props.setPath(username!)
    }

    action = () => {
        console.log(this.state)
    }

    render = (): JSX.Element => {

        return (
            <>
                <Navigation />
                <Container className="index">
                    <Card>
                        <Card.Body>
                            <Card.Title>Hi, { this.state.username }</Card.Title>
                            <hr/>
                            This is home...
                            <br /><br />
                            <Button onClick={ this.action } variant="dark">Click me!</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))