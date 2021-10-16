import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Card, Form, Button } from "react-bootstrap"
import { Props, UserData as State } from "../../../interface/Interfaces"
import { mapDispatchToProps, mapStateToProps } from "../../../app/functions"


class SearchFamily extends Component<Props, State> {

    render = () => {
        return (
            <>
                <Card style={{ backgroundColor: '#198754', color: 'whitesmoke' }}>
                    <h4>Cari Data Anggota Keluarga (KTP)</h4>
                    <hr />
                    <Card.Body>
                        <Form.Control type="text" placeholder="NIK atau Nama" />
                        <br />
                        <Button variant="dark" >Search</Button>
                    </Card.Body>
                </Card>
                <br />
            </>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFamily))