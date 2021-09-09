import React, {useContext} from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';



export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handlelogin = () => {
       // history.push('/');
       history.replace('/');
       
        dispatch ( {
            type: types.login, 
            payload: {
                name: 'Yadira'
            }
        })
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick= {handlelogin}
            >
                Login
            </button>

        </div>
    )
}
