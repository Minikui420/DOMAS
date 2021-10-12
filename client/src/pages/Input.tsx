import { Component } from "react"
import { Card, Container } from 'react-bootstrap'
import { Props, UserData as State } from '../interface/Interfaces'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from "../app/functions"
import Navigation from "../components/header/Navigation"
import OptioButton from '../components/body/OptionButton'
import InputKtp from "../components/body/InputKtp"
import InputKk from "../components/body/InputKk"



class Input extends Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {}
    }

    componentDidMount = () => {
        
    }

    activityPage = (activity: string): JSX.Element => {
        switch (activity) {
            case 'KK':
                return <InputKk />
            case 'Perizinan':
                return <>Perizinan</>
            case 'Keterangan':
                return <>Keterangan</>
            case 'Arsip':
                return <>Arsip</>
            default:
                return <InputKtp />
        }
    }

    render = (): JSX.Element => {

        const { activity } = this.props.temporer

        return ( 
            <>
                <Navigation />
                <Container>
                    <Card className="input">
                        <OptioButton />
                        <Card.Body>
                            <br/>
                            <h3>Input Data Penduduk ({ activity })</h3>
                            <hr/>
                            <br/>
                            { this.activityPage(activity!) }
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }

} 


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Input))
