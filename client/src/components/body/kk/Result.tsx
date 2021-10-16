import { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Card, Table, Button } from "react-bootstrap"
import { Props, UserData as State } from "../../../interface/Interfaces"
import { mapDispatchToProps, mapStateToProps } from "../../../app/functions"
import SearchFamily from './SearchFamily'


class Result extends Component<Props, State> {

    editData = () => {
        this.props.setToResult(false)
    }

    member = (): JSX.Element => {
        return (
            <>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>NIK</td>
                        <td>Nama</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1234567890123456</td>
                        <td>MUHAIMIN DZATALFADHUL</td>
                        <td>ANAK</td>
                    </tr>
                </tbody>
            </>
        )
    }

    render = () => {
        const { kk_data, toResult } = this.props.temporer
        // console.log(kk_data)
        return toResult === false ?
            <>
                <Card style={{ backgroundColor: '#dc3545', color: 'whitesmoke' }}>
                    <Card.Body>
                        <Card.Title>Info!</Card.Title>
                        <Card.Text>Pastikan data sudah benar dan hasil akan ditampilkan di sini</Card.Text>
                    </Card.Body>
                </Card>
            </>
                :
            <>
                <Card style={{ backgroundColor: '#33C4FF', color: 'whitesmoke' }}>
                    <h4>Data KK</h4>
                    <hr />
                    <br />
                    <Table responsive="sm" borderless hover style={{ color: 'whitesmoke' }}>
                        <tbody>
                            <tr>
                                <td>No. KK</td>
                                <td>:</td>
                                <td>{ kk_data!.no_kk }</td>
                            </tr>
                            <tr>
                                <td>Kepala Keluarga</td>
                                <td>:</td>
                                <td>{ kk_data!.family_head }</td>
                            </tr>
                            <tr>
                                <td>RT/RW</td>
                                <td>:</td>
                                <td>{ kk_data!.rt }/{ kk_data!.rw }</td>
                            </tr>
                            <tr>
                                <td>Kelurahan/Desa</td>
                                <td>:</td>
                                <td>{ kk_data!.village }</td>
                            </tr>
                            <tr>
                                <td>Kecamatan</td>
                                <td>:</td>
                                <td>{ kk_data!.districts }</td>
                            </tr>
                            <tr>
                                <td>Kabupaten/Kota</td>
                                <td>:</td>
                                <td>{ kk_data!.city }</td>
                            </tr>
                            <tr>
                                <td>Kode Pos</td>
                                <td>:</td>
                                <td>{ kk_data!.zip }</td>
                            </tr>
                            <tr>
                                <td>Provinsi</td>
                                <td>:</td>
                                <td>{ kk_data!.province }</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <h4>Anggota Keluarga</h4>
                    <hr />
                    <Table responsive="sm" hover style={{ color: 'whitesmoke' }}>
                        { this.member() }
                    </Table>
                    <br />
                    <Button variant="dark" onClick={ this.editData }>Edit</Button>
                </Card>
                <br />
                <SearchFamily />
            </>
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result))