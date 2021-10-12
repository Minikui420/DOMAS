import { Component } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { Props, UserData as State } from "../../../interface/Interfaces";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { mapDispatchToProps, mapStateToProps } from "../../../app/functions"


class SearchFamily extends Component<Props, State> {

    render = () => {
        return (
            <>
                <Card style={{ backgroundColor: '#198754', color: 'whitesmoke' }}>
                    <Card.Body>
                        <Card.Title>Cari Data Anggota Keluarga</Card.Title>
                        <hr />
                        <Form.Control type="text" placeholder="Cari Berdasarkan NIK" />
                        <br />
                        <Button variant="dark" >Search</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFamily))