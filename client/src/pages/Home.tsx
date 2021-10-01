import { Props, State } from '../interface/Interfaces'
import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router'
import { mapStateToProps, mapDispatchToProps } from '../app/functions'
import Navigation from '../components/header/Navigation'
import Api from '../api/Api'


class Home extends Component<Props, State> {


    componentDidMount = async () => {
        
        const { token, refresh } = this.props.persist.dataToken
        const api = new Api({ token })
        const user = await api.get('/user')
        const { errors } = user
        
        if(!errors) {
            this.props.setUserDataLogin(user)
        } else {
            console.log({ token: refresh })
            const api = new Api({token: refresh})
            const new_token = await api.post('/token')
            console.log(new_token) // --> end today!
        }
        

    }

    render = (): JSX.Element => {

        return (
            <>
                <Navigation />
                <div className="index">
                    <h1>Home ... </h1>
                </div>
            </>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))