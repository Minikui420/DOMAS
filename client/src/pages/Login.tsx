import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import { Props, State, UserData } from '../interface/Interfaces'
import { mapStateToProps, mapDispatchToProps } from '../app/functions'
import Navigation from '../components/header/Navigation'
import Api from '../api/Api'
import '../assets/css/login.css'


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

    submit = async () => {
        
        try {

            const api = new Api(this.state)
            const userData: UserData = await api.post('/login')
            const { id, username, picture, createdAt, token, refreshToken } = userData
            this.props.setUserDataLogin({ id, username, picture, createdAt })
            this.props.setUserDataToken({ token, refreshToken })
            this.props.setIsLogin(true)
            this.props.history.push('/home')
            
        } catch (error) {
            console.log(`${error}`)
            alert(error)
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