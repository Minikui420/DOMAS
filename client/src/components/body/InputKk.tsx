import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Button, Form, Row, Col } from "react-bootstrap"
import { Props, KKData as State } from '../../interface/Interfaces'
import { mapDispatchToProps, mapStateToProps } from "../../app/functions"
import Result from './Result'

class InputKk extends Component<Props, State> {

    default = {
        no_kk: '',
        family_head: '',
        rt_rw: '',
        village: 'DOMAS',
        distric: 'PONTANG',
        city: 'SERANG',
        zip: '42192',
        province: 'BANTEN'
    } as State

    constructor(props: Props){
        super(props)
        this.state = this.default
    }

    changerData = (e: any) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    submit = () => {
        this.props.setKKData(this.state)
    }

    render = () => {
        return(
            <>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>No</Form.Label>
                            <Form.Control onChange={ this.changerData } name="no_kk" type="text" placeholder="No KK" />
                            <br />
                            <Form.Label>Nama Kepala Keluarga</Form.Label>
                            <Form.Control onChange={ this.changerData } name="family_head" type="text" placeholder="KEPALA KELUARGA"  />
                            <br />
                            <Form.Label>RT/RW</Form.Label>
                            <Form.Control onChange={ this.changerData } name="rt_rw" type="text" placeholder="000/000"  />
                            <br />
                            <Form.Label>Desa/Kelurahan</Form.Label>
                            <Form.Control onChange={ this.changerData } name="village" type="text" defaultValue={ this.default.village } placeholder="KELURAHAN"  />
                            <br />
                            <Form.Label>Kecamatan</Form.Label>
                            <Form.Control onChange={ this.changerData } name="distric" type="text" defaultValue={ this.default.distric } placeholder="KECAMATAN"  />
                            <br />
                            <Form.Label>Kabupaten/Kota</Form.Label>
                            <Form.Control onChange={ this.changerData } name="city" type="text" defaultValue={ this.default.city } placeholder="KABUPATAN/KOTA"  />
                            <br />
                            <Form.Label>Kode Pos</Form.Label>
                            <Form.Control onChange={ this.changerData } name="zip" type="text" defaultValue={ this.default.zip } placeholder="KODE POS"  />
                            <br />
                            <Form.Label>Provinsi</Form.Label>
                            <Form.Control onChange={ this.changerData } name="province" type="text" defaultValue={ this.default.province } placeholder="PROVINSI"  />
                            
                        </Form.Group>
                        <br /><br />
                        <Button onClick={ this.submit } variant="dark">Tambah data ke Info</Button>
                    </Form>
                </Col>
                <Col>
                    <Result />
                </Col>
            </Row>
            </>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputKk))