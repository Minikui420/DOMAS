import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Button, Form, Row, Col, Card } from "react-bootstrap"
import { Props, DefaultInput as State } from '../../../interface/Interfaces'
import { mapDispatchToProps, mapStateToProps } from "../../../app/functions"
import Api from '../../../api/Api'
import Result from './Result'

class InputKk extends Component<Props, State> {

    defaultKK = {
        id: '',
        no_kk: '',
        family_head: '',
        rt: '',
        rw: '',
        village: 'DOMAS',
        districts: 'PONTANG',
        city: 'SERANG',
        zip: '42192',
        province: 'BANTEN'
    } as State['defaultKK']

    defaultKTP = {
        id: '', // id kk
        name: '',
        nik: '',
        gender: '',
        birthPlace: 'SERANG',
        date: new Date(),
        religion: 'ISLAM',
        education: '',
        professionType: 'BELUM/TIDAK BEKERJA',
        maritalStastus: 'BELUM KAWIN',
        statusInFamily: 'KEPALA KELUARGA',
        citizenship: 'WNI',
        no_passpor: ' - ',
        no_kitas_kitap: ' - ',
        fatherName: '',
        motherName: ''
    } as State['defaultKTP']


    man: string = 'L'
    woman: string = 'P'

    constructor(props: Props){
        super(props)
        this.state = {
            defaultKK: this.defaultKK,
            defaultKTP: this.defaultKTP
        }
    }

    changerData = (e: any) => {
        const { name, value } = e.target
        this.setState({ defaultKK : { ...this.state.defaultKK, [name]: value } })
    }

    changerMember = (e: any) => {
        const { name, value } = e.target
        this.setState({ defaultKTP : { ...this.state.defaultKTP, [name]: value } })
    }

    submit = async () => {
        // const api = new Api(this.state.defaultKK!)
        // const response: State['defaultKK'] = await api.post('/family/add')
        // if(response){
        //     this.setState({ defaultKTP: { ...this.state.defaultKTP, id: response.id } })
            this.props.setKKData(this.state.defaultKK!)
            this.props.setToResult(true)
        // }
    }

    addMember = async () => {
        console.log(this.state.defaultKTP)
        // const api = new Api(this.state.defaultKTP)
        // const response = await api.post('/detail/add')
        // console.log(response)
    }

    witchOne = (data: boolean): JSX.Element => {
        return data === false ? 
        <>
            <Form.Group>
                <Form.Label>No</Form.Label>
                <Form.Control onChange={ this.changerData } name="no_kk" type="text" placeholder="No KK" />
                <br />
                <Form.Label>Nama Kepala Keluarga</Form.Label>
                <Form.Control onChange={ this.changerData } name="family_head" type="text" placeholder="KEPALA KELUARGA"  />
                <br />
                <Form.Label>RT</Form.Label>
                <Form.Control onChange={ this.changerData } name="rt" type="text" placeholder="000"  />
                <br />
                <Form.Label>RW</Form.Label>
                <Form.Control onChange={ this.changerData } name="rw" type="text" placeholder="000"  />
                <br />
                <Form.Label>Desa/Kelurahan</Form.Label>
                <Form.Control onChange={ this.changerData } name="village" type="text" defaultValue={ this.defaultKK!.village } placeholder="KELURAHAN"  />
                <br />                                    
                <Form.Label>Kecamatan</Form.Label>
                <Form.Control onChange={ this.changerData } name="districts" type="text" defaultValue={ this.defaultKK!.districts } placeholder="KECAMATAN"  />
                <br />
                <Form.Label>Kabupaten/Kota</Form.Label>
                <Form.Control onChange={ this.changerData } name="city" type="text" defaultValue={ this.defaultKK!.city } placeholder="KABUPATAN/KOTA"  />
                <br />
                <Form.Label>Kode Pos</Form.Label>
                <Form.Control onChange={ this.changerData } name="zip" type="text" defaultValue={ this.defaultKK!.zip } placeholder="KODE POS"  />
                <br />
                <Form.Label>Provinsi</Form.Label>
                <Form.Control onChange={ this.changerData } name="province" type="text" defaultValue={ this.defaultKK!.province } placeholder="PROVINSI"  />
            </Form.Group>
            <br /><br />
            <Button onClick={ this.submit } variant="dark">Tambah data ke Info</Button>
        </>
        :
        <>
            <h3>Tambahkan Anggota Keluarga</h3>
            <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control onChange={ this.changerMember } name="name" type="text" placeholder="NAMA"  />
                <Form.Label>NIK</Form.Label>
                <Form.Control onChange={ this.changerMember } name="nik" type="text" placeholder="NIK" />
                <Form.Label>Tempat lahir</Form.Label>
                <Form.Control onChange={ this.changerMember } name="birthPlace" type="text" placeholder="TEMPAT LAHIR" defaultValue={ this.defaultKTP!.birthPlace } />
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control onChange={ this.changerMember } name="date" type="date" />
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                    inline 
                    name="gender"
                    onChange={ this.changerMember } 
                    checked={ this.state.defaultKTP!.gender === this.man } 
                    type="checkbox" 
                    label="LAKI-LAKI" 
                    value={ this.man }  
                />
                <Form.Check   
                    inline
                    name="gender" 
                    onChange={ this.changerMember } 
                    checked={ this.state.defaultKTP!.gender === this.woman } 
                    type="checkbox" 
                    label="PEREMPUAN" 
                    value={ this.woman } 
                />
                </Form.Group>
                <Form.Label>Agama</Form.Label>
                <Form.Control onChange={ this.changerMember } name="religion" type="text" placeholder="AGAMA" defaultValue={ this.defaultKTP!.religion } />
                <Form.Label>Pendidikan</Form.Label>
                <Form.Control onChange={ this.changerMember } name="education" type="text" placeholder="PENDIDIKAN" defaultValue={ this.defaultKTP!.education }  />
                <Form.Label>Jenis Pekerjaan</Form.Label>
                <Form.Control onChange={ this.changerMember } name="professionType" type="text" placeholder="JENIS PEKERJAAN" defaultValue={ this.defaultKTP!.professionType } />
                <Form.Label>Status Perkawinan</Form.Label>
                <Form.Control onChange={ this.changerMember } name="maritalStatus" type="text" placeholder="STATUS PERKAWINAN" defaultValue={ this.defaultKTP!.maritalStastus } />
                <Form.Label>Status Hubungan Dalam Keluarga</Form.Label>
                <Form.Control onChange={ this.changerMember } name="statusInFamily" type="text" placeholder="PEKERJAAN" defaultValue={ this.defaultKTP!.statusInFamily } />
                <Form.Label>Kewarganegaraan</Form.Label>
                <Form.Control onChange={ this.changerMember } name="citizenship" type="text" placeholder="KEWARGANEGARAAN" defaultValue={ this.defaultKTP!.citizenship } />
                <Form.Label>No. Paspor</Form.Label>
                <Form.Control onChange={ this.changerMember } name="no_paspor" type="text" placeholder="NO. PASPOR" defaultValue={ this.defaultKTP!.no_passpor } />
                <Form.Label>No. KITAS/KITAP</Form.Label>
                <Form.Control onChange={ this.changerMember } name="no_kitas_kitap" type="text" placeholder="NO. KITAS/KITAP" defaultValue={ this.defaultKTP!.no_kitas_kitap } />
                <Form.Label>Nama Orang Tua (Ayah)</Form.Label>
                <Form.Control onChange={ this.changerMember } name="fatherName" type="text" placeholder="NAMA ORANG TUA (AYAH)" defaultValue={ this.defaultKTP!.fatherName } />
                <Form.Label>Nama Orang Tua (Ibu)</Form.Label>
                <Form.Control onChange={ this.changerMember } name="motherName" type="text" placeholder="NAMA ORANG TUA (IBU)" defaultValue={ this.defaultKTP!.motherName } />
                </Form.Group>
                <br /><br />
            <Button onClick={ this.addMember } variant="dark">Add Data</Button>
        </>
    }

    pushData = () => {
        console.log(this.state.defaultKTP)
    }

    render = () => {

        const { toResult } = this.props.temporer

        return(
            <>
                <Row>
                    <Col>
                        <Form>
                            { this.witchOne(toResult!) }
                        </Form> 
                    </Col>
                    <Col>
                        <Result />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <Card>
                            <h1>Push Data</h1>
                            <Button onClick={ this.pushData }>Push data!</Button>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputKk))