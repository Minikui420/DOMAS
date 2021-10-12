import { Component } from "react";
import { Props, UserData as State } from "../../interface/Interfaces";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { mapDispatchToProps, mapStateToProps } from "../../app/functions"
import { Card, Table } from "react-bootstrap";


class Result extends Component<Props, State> {
    render = () => {
        const { kk_data } = this.props.temporer
        console.log(kk_data)
        return(
            <>
                <Card style={{ backgroundColor: '#dc3545', color: 'whitesmoke' }}>
                    <Card.Body>
                        <Card.Title>Info!</Card.Title>
                        <Card.Text>Pastikan data sudah benar dan hasil akan ditampilkan di bawah ini</Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card style={{ backgroundColor: '#33C4FF', color: 'whitesmoke' }}>
                    <h4>Data KK</h4>
                    <hr />
                    <br />
                    <Table responsive="sm" borderless hover style={{ color: 'whitesmoke' }}>
                        <tbody>
                            <tr>
                                <td>No. KK</td>
                                <td>:</td>
                                <td>{ kk_data.no_kk }</td>
                            </tr>
                            <tr>
                                <td>Kepala Keluarga</td>
                                <td>:</td>
                                <td>{ kk_data.family_head }</td>
                            </tr>
                            <tr>
                                <td>RT/RW</td>
                                <td>:</td>
                                <td>{ kk_data.rt_rw }</td>
                            </tr>
                            <tr>
                                <td>Kelurahan/Desa</td>
                                <td>:</td>
                                <td>{ kk_data.village }</td>
                            </tr>
                            <tr>
                                <td>Kecamatan</td>
                                <td>:</td>
                                <td>{ kk_data.distric }</td>
                            </tr>
                            <tr>
                                <td>Kabupaten/Kota</td>
                                <td>:</td>
                                <td>{ kk_data.city }</td>
                            </tr>
                            <tr>
                                <td>Kode Pos</td>
                                <td>:</td>
                                <td>{ kk_data.zip }</td>
                            </tr>
                            <tr>
                                <td>Provinsi</td>
                                <td>:</td>
                                <td>{ kk_data.province }</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result))