import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import { Props, State, UserData } from '../interface/Interfaces'
import { mapStateToProps, mapDispatchToProps, cookies, expires } from '../app/functions'
import Navigation from '../components/header/Navigation'
import Api from '../api/Api'
import '../assets/css/login.css'
import jwtDecode from 'jwt-decode'


class Login extends Component<Props, State> {

    constructor(readonly props: Props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    formChange = (e: any): void => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    setUp = (token: string, refreshToken: string, expires: Date) => {
        cookies.set('token', token, { expires })
        cookies.set('refreshToken', refreshToken, { expires })
        this.props.setIsLogin(true)
    }

    submit = async () => {
        try {
            const api = new Api(this.state)
            const userData: UserData = await api.post('/login')
            const { token, refreshToken } = userData
            const decode: UserData = jwtDecode(token!)
            new Promise(res => {
                this.props.setPath(decode.username!)
                res(this.setUp(token!, refreshToken!, expires))
            })
            .then(() => this.props.history.push(`/${decode.username}`))
        } catch (error) {
            console.log(error)
        }
    }

    render = (): JSX.Element => {
        return (
            <>
                <Navigation />
                <Card className="login">
                    <h3>Login</h3>
                    <br />
                    <Form.Group>
                        <Form.Control onChange={ this.formChange } type="email" name="email" placeholder="Email" />
                        <br />
                        <Form.Control onChange={ this.formChange } type="password" name="password" placeholder="Password" />
                        <br />
                        <Button onClick={ this.submit } variant="dark">Login</Button>
                    </Form.Group>
                </Card>
            </>
        )
    }

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))

