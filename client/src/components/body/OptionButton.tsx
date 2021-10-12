import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Button, ButtonGroup } from "react-bootstrap"
import { mapDispatchToProps, mapStateToProps } from "../../app/functions"
import { Props, UserData as State } from "../../interface/Interfaces"


class OptionButton extends Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {}
    }

    handler = (e: any) => {
        this.props.setActivity(e.target.name)
    }

    render = (): JSX.Element => {
        return(
            <ButtonGroup>
                <Button onClick={ this.handler } variant="primary" name="KTP">KTP</Button>
                <Button onClick={ this.handler } variant="secondary" name="KK">KK</Button>
                <Button onClick={ this.handler } variant="success" name="Perizinan">Perizinan</Button>
                <Button onClick={ this.handler } variant="warning" name="Keterangan">Keterangan</Button>
                <Button onClick={ this.handler } variant="danger" name="Arsip">Arsip</Button>
            </ButtonGroup>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OptionButton))