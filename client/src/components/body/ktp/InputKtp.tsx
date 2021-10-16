import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import { Props, KTPData as State } from '../../../interface/Interfaces'
import { mapDispatchToProps, mapStateToProps } from "../../../app/functions"
import Api from '../../../api/Api'



class InputKtp extends Component<Props, State> {
    
    man: string = 'L'
    woman: string = 'P'

    default: State = {
        nik: '',
        name: '',
        birthPlace: 'SERANG',
        date: new Date(),
        gender: '',
        bloodType: ' - ',
        address: 'KP. DOMAS',
        rt: '000',
        rw: '000',
        districts: 'PONTANG',
        village: 'DOMAS',
        religion: 'ISLAM',
        maritalStastus: 'BELUM KAWIN',
        profession: 'BELUM/TIDAK BEKERJA',
        citizenship: 'WNI',
        validUntil: 'SEUMUR HIDUP'
    }

    constructor(props: Props){
        super(props)
        this.state = this.default
    }

    eventHendler = (e: any) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    submit = async () => {
        // console.log(this.state)
        const api = new Api(this.state)
        const res = await api.post('/resident/add')
        console.log(res)
    }
    
    render = () => {
        return(
            <>
                <Form>
                    <Form.Group>
                        <Form.Label>NIK</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="nik" type="text" placeholder="NIK" />
                        <Form.Label>Nama</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="name" type="text" placeholder="NAMA"  />
                        <Form.Label>Tempat lahir</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="birthPlace" type="text" placeholder="TEMPAT LAHIR" defaultValue={ this.default.birthPlace } />
                        <Form.Label>Tanggal Lahir</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="date" type="date" />
                        <Form.Label>Jenis Kelamin</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                inline 
                                name="gender"
                                onChange={ this.eventHendler } 
                                checked={ this.state.gender === this.man } 
                                type="checkbox" 
                                label="LAKI-LAKI" 
                                value={ this.man }  
                            />
                            <Form.Check   
                                inline
                                name="gender" 
                                onChange={ this.eventHendler } 
                                checked={ this.state.gender === this.woman } 
                                type="checkbox" 
                                label="PEREMPUAN" 
                                value={ this.woman } 
                            />
                        </Form.Group>
                        <Form.Label>Golongan Darah</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="bloodType" type="text" placeholder="GOLONGAN DARAH" defaultValue={ this.default.bloodType } />
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="address" type="text" placeholder="ALAMAT" defaultValue={ this.default.address }  />
                        <Form.Label>RT</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="rt" type="text" placeholder="RT" defaultValue={ this.default.rt } />
                        <Form.Label>RW</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="rw" type="text" placeholder="RW" defaultValue={ this.default.rw } />
                        <Form.Label>Kelurahan / Desa</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="village" type="text" placeholder="KELURAHAN/DESA" defaultValue={ this.default.village } />
                        <Form.Label>Kecamaan</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="districts" type="text" placeholder="KECAMATAN" defaultValue={ this.default.districts } />
                        <Form.Label>Agama</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="religion" type="text" placeholder="AGAMA" defaultValue={ this.default.religion } />
                        <Form.Label>Status Perkawinan</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="maritalStatus" type="text" placeholder="STATUS PERKAWINAN" defaultValue={ this.default.maritalStastus } />
                        <Form.Label>Pekerjaan</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="profession" type="text" placeholder="PEKERJAAN" defaultValue={ this.default.profession } />
                        <Form.Label>Kewarganegaraan</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="citizenship" type="text" placeholder="KEWARGANEGARAAN" defaultValue={ this.default.citizenship } />
                        <Form.Label>Berlaku Hingga</Form.Label>
                        <Form.Control onChange={ this.eventHendler } name="validUntil" type="text" placeholder="BERLAKU HINGGA" defaultValue={ this.default.validUntil } />
                        </Form.Group>
                        <br /><br />
                    <Button onClick={ this.submit } variant="dark">Add Data</Button>
                </Form>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputKtp))