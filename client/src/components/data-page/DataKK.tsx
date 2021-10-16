import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Card, Button, Row, Col, Form } from "react-bootstrap"
import { Props, UserData as State } from '../../interface/Interfaces'
import { mapStateToProps, mapDispatchToProps } from '../../app/functions'



class DataKK extends Component <Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {
            search: ''
        }
    }

    formSearch = (e: any) => {
        const { name, value } = e.target
        this.setState({ [name]: value.toUpperCase() })
    }

    searchData = () => {
        console.log(this.state)
    }

    render = (): JSX.Element => {
        return (
            <>
                <Row>
                    <Col>
                        <Card style={{ backgroundColor: '#0d6efd', color: 'whitesmoke' }}>
                            <Card.Body>
                                <Card.Title> Hello </Card.Title>
                                <Card.Text>
                                    Text...
                                </Card.Text>
                            </Card.Body>
                        </Card>    
                    </Col>
                    <Col>
                        <Card style={{ backgroundColor: '#ffcd39', color: 'whitesmoke' }}>
                            <Card.Body>
                                <Card.Title> Hello </Card.Title>
                                <Card.Text>
                                    Text...
                                </Card.Text>
                            </Card.Body>
                        </Card>    
                    </Col>
                    <Col>
                        <Card style={{ backgroundColor: '#b02a37', color: 'whitesmoke' }}>
                            <Card.Body>
                                <Card.Title> Hello </Card.Title>
                                <Card.Text>
                                    Text...
                                </Card.Text>
                            </Card.Body>
                        </Card>    
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Form className="search">
                            <Form.Control onChange={ this.formSearch } type="text" name="search" placeholder="NIK atau Nama"/>
                            <Button onClick={ this.searchData } variant="success" style={{ marginLeft: '10px' }} >Cari</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1>Data KK</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataKK))