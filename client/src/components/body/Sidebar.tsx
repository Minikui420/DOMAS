import { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Props } from '../../interface/Interfaces'
import { withRouter } from 'react-router-dom'



class Menubar extends Component<Props> {

    render = () => {

        // const { pathname } = this.props.location

        return (
            <div className="listBar">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </div>
        )
    }

}

export default withRouter(Menubar)