import logincomponent from '../LoginComponent/logincomponent';

export default class Auth extends React.Component {
    render() {
        return(
            <Login setToken={props.setToken} />
        )
    }
}