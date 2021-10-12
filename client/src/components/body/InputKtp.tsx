import { Component } from "react"
import { Button, Form } from "react-bootstrap"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { mapDispatchToProps, mapStateToProps } from "../../app/functions"
import { Props, UserData as State } from '../../interface/Interfaces'



class InputKtp extends Component<Props, State> {
    
    man: string = 'LAKI-LAKI'
    woman: string = 'PEREMPUAN'

    constructor(props: Props){
        super(props)
        this.state = {}
    }

    eventHendler = (e: any) => {
        console.log(e.target.value)
        this.setState({ gender: e.target.value })
    }
    
    render = () => {
        return(
            <>
                <Form>
                    <Form.Group>
                        <Form.Label>NIK</Form.Label>
                        <Form.Control type="text" placeholder="NIK" />
                        <br />
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="NAMA"  />
                        <br />
                        <Form.Label>Tempat, Tanggal lahir</Form.Label>
                        <Form.Control type="text" placeholder="SERANG, 00-00-0000"  />
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
                        <Form.Control type="text" placeholder=" - "  />
                        <br />
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" placeholder="KP. DOMAS"  />
                        <br />
                        <Form.Label>RT/RW</Form.Label>
                        <Form.Control type="text" placeholder="000/000"  />
                        <br />
                        <Form.Label>Kelurahan / Desa</Form.Label>
                        <Form.Control type="text" placeholder="DOMAS" defaultValue="DOMAS" />
                        <br />
                        <Form.Label>Kecamaan</Form.Label>
                        <Form.Control type="text" placeholder="PONTANG" defaultValue="PONTANG" />
                        <br />
                        <Form.Label>Agama</Form.Label>
                        <Form.Control type="text" placeholder="ISLAM" defaultValue="ISLAM" />
                        <br />
                        <Form.Label>Status Perkawinan</Form.Label>
                        <Form.Control type="text" placeholder="BELUM KAWIN"  />
                        <br />
                        <Form.Label>Pekerjaan</Form.Label>
                        <Form.Control type="text" placeholder="BELUM/TIDAK BEKERJA"  />
                        <br />
                        <Form.Label>Kewarganegaraan</Form.Label>
                        <Form.Control type="text" placeholder="WNI" defaultValue="WNI" />
                        <br />
                        <Form.Label>Berlaku Hingga</Form.Label>
                        <Form.Control type="text" placeholder="SEUMUR HIDUP" defaultValue="SEUMUR HIDUP" />
                        </Form.Group>
                        <br /><br />
                    <Button variant="dark">Click me!</Button>
                </Form>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputKtp))