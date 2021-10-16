import { connect } from "react-redux"
import { Component } from "react"
import { withRouter } from "react-router-dom"
import { Props, UserData as State } from '../interface/Interfaces'
import { mapStateToProps, mapDispatchToProps } from '../app/functions'
import Sidebar from "../components/body/Sidebar"
import Navigation from "../components/header/Navigation"
import DataKK from "../components/data-page/DataKK"


class Data extends Component <Props, State> {

    action  = () => {
        console.log(100)
    }

    dataComponent = (localPath: string) => {
        switch (localPath) {
            case 'KK':
                return <DataKK />
            case 'KTP':
                return <h1>KK nih bos..</h1>
            default:
                return <h1>OKE...</h1>
        }
    }

    render = (): JSX.Element => {

        const { localPath } = this.props.temporer

        return (
            <>
                <Navigation />
                <Sidebar />
                <div className="menu">
                    { this.dataComponent(localPath!) }
                </div>
            </>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Data))

