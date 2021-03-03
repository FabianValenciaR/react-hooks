import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const newUser = {
        id: 1234,
        name: "Fabian Valencia",
        email: "fabianmvr@gmail.com"
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => setUser(newUser)}
            >
                Login
            </button>
        </div>
    )
}
