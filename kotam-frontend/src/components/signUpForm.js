import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const SignUpForm = () => {

    const [user, SetUser] = useState({
        username:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e => {
        const { name,value } = e.target
        SetUser({
            ...user,
            [name]: value
        })
    }

    return (
        <form style={{marginTop: "1rem"}}>

                <div class="singUpCard">

                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control"  value={user.username} name="username" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"  value={user.email} name="email" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={user.password} placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Re-enter Password</label>
                        <input type="password" className="form-control" value={user.reEnterPassword} placeholder="*****" name="reEnterPassword" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"1rem"}}>Register</button>
                    <p className="forgot-password text-right" style={{marginTop:"0.5rem"}}>
                        Already registered <a href="#">sign in?</a>
                    </p>                    
                </div>
            </form>            

    )
}

export default SignUpForm;