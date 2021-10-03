import { Props, State } from '../interface/Interfaces'
import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router'
import { mapStateToProps, mapDispatchToProps } from '../app/functions'
import Navigation from '../components/header/Navigation'
// import Api from '../api/Api'


class Home extends Component<Props, State> {

    componentDidMount = async () => {
        const { isLogin } = this.props.persist
        if(isLogin === false) {
            this.props.history.push('/')
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