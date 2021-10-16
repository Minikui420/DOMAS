import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Props, Path as State } from '../../interface/Interfaces'
import { mapStateToProps, mapDispatchToProps } from '../../app/functions'



class Sidebar extends Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {
            localPath: ''
        }
    }

    handlerSide = (e: any) => {
        this.setState({ localPath: e.target.innerHTML })
        this.props.setLocalPath(e.target.innerHTML)
    }

    render = () => {

        console.log(this.state)

        return (
            <div className="listBar">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link onClick={ this.handlerSide } active={ this.state.localPath === `KK` } >KK</Nav.Link>
                    <Nav.Link onClick={ this.handlerSide } active={ this.state.localPath === `KTP` } >KTP</Nav.Link>
                    <Nav.Link onClick={ this.handlerSide } active={ this.state.localPath === `Staff` } >Staff</Nav.Link>
                    <Nav.Link onClick={ this.handlerSide } active={ this.state.localPath === `Anggaran` } >Anggaran</Nav.Link>
                </Nav>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))