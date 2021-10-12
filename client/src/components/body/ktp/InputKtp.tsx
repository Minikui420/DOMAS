import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import { Props, KTPData as State } from '../../../interface/Interfaces'
import { mapDispatchToProps, mapStateToProps } from "../../../app/functions"



class InputKtp extends Component<Props, State> {
    
    man: string = 'LAKI-LAKI'
    woman: string = 'PEREMPUAN'

    constructor(props: Props){
        super(props)
        this.state = {}
    }

    eventHendler = (e: any) => {
        this.setState({ gender: e.target.value })
    }

    submit = () => {
        console.log(this.state)
    }
    
    render = () => {
        return(
            <>
                <Form>
                    <Form.Group>
                        <Form.Label>NIK</Form.Label>
                        <Form.Control name="nik" type="text" placeholder="NIK" />
                        <br />
                        <Form.Label>Nama</Form.Label>
                        <Form.Control name="name" type="text" placeholder="NAMA"  />
                        <br />
                        <Form.Label>Tempat, Tanggal lahir</Form.Label>
                        <Form.Control name="place_dateOfBirth" type="text" placeholder="SERANG, 00-00-0000"  />
                        <br />
                        <Form.Label>Jenis Kelamin</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                inline 
                                onChange={ this.eventHendler } 
                                checked={ this.state.gender === this.man } 
                                type="checkbox" 
                                label={ this.man } 
                                value={ this.man }  
                            />
                            <Form.Check                                     inline 
                                onChange={ this.eventHendler } 
                                checked={ this.state.gender === this.woman } 
                                type="checkbox" 
                                label={ this.woman } 
                                value={ this.woman } 
                            />
                        </Form.Group>
                        <Form.Label>Golongan Darah</Form.Label>
                        <Form.Control name="bloodType" type="text" placeholder=" - "  />
                        <br />
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control name="address" type="text" placeholder="KP. DOMAS"  />
                        <br />
                        <Form.Label>RT/RW</Form.Label>
                        <Form.Control name="" type="text" placeholder="000/000"  />
                        <br />
                        <Form.Label>Kelurahan / Desa</Form.Label>
                        <Form.Control name="" type="text" placeholder="DOMAS" defaultValue="DOMAS" />
                        <br />
                        <Form.Label>Kecamaan</Form.Label>
                        <Form.Control name="" type="text" placeholder="PONTANG" defaultValue="PONTANG" />
                        <br />
                        <Form.Label>Agama</Form.Label>
                        <Form.Control name="" type="text" placeholder="ISLAM" defaultValue="ISLAM" />
                        <br />
                        <Form.Label>Status Perkawinan</Form.Label>
                        <Form.Control name="" type="text" placeholder="BELUM KAWIN"  />
                        <br />
                        <Form.Label>Pekerjaan</Form.Label>
                        <Form.Control name="" type="text" placeholder="BELUM/TIDAK BEKERJA"  />
                        <br />
                        <Form.Label>Kewarganegaraan</Form.Label>
                        <Form.Control name="" type="text" placeholder="WNI" defaultValue="WNI" />
                        <br />
                        <Form.Label>Berlaku Hingga</Form.Label>
                        <Form.Control name="" type="text" placeholder="SEUMUR HIDUP" defaultValue="SEUMUR HIDUP" />
                        </Form.Group>
                        <br /><br />
                    <Button onClick={ this.submit } variant="dark">Add Data</Button>
                </Form>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputKtp))