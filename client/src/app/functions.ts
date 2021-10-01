
import { 
    setUserDataLogin, setUserDataToken, setIsLogin
} from './hooks'


export const mapStateToProps = (state: any) => ({
    persist: state.persist,
    temporer : state.temporer
})

export const mapDispatchToProps = (dispatch: any) => {
    return {
        setUserDataLogin: (userData: any) => dispatch(setUserDataLogin(userData)),
        setUserDataToken: (userData: any) => dispatch(setUserDataToken(userData)),
        setIsLogin: () => dispatch(setIsLogin())
    }
}