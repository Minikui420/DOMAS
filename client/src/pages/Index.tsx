import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../app/functions'
import { Props } from '../interface/Interfaces'
import { Container, Jumbotron } from 'react-bootstrap'
import Navigation from '../components/header/Navigation'


class Index extends Component<Props> {
    render = (): JSX.Element => {
        return (
            <>
                <Navigation />
                <div className="index">
                    <Jumbotron>
                        <h1>Hello, Selamat datang di website desa Domas</h1>
                    </Jumbotron>
                    <br />
                    <Container>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident incidunt placeat odio omnis perspiciatis non neque deserunt, nostrum, repudiandae et modi asperiores iure labore amet unde eius recusandae. Voluptate, quidem.</p>
                    </Container>
                </div>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
