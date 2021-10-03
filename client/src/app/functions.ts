import { 
    setUserDataLogin, setUserDataToken, setIsLogin
} from './hooks'
import { StateToProps, DispatchToProps, UserData } from '../interface/Interfaces'


export const mapStateToProps = (state: StateToProps) => ({
    persist: state.persist,
    temporer : state.temporer
})

export const mapDispatchToProps = (dispatch: Function): DispatchToProps => {
    return {
        setUserDataLogin: (userData: UserData) => dispatch(setUserDataLogin(userData)),
        setUserDataToken: (userData: UserData) => dispatch(setUserDataToken(userData)),
        setIsLogin: (data: boolean) => dispatch(setIsLogin(data))
    }
}