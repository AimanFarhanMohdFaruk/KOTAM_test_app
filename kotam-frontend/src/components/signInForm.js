import React, { useState } from 'react';



const SignInForm = () => {
    return (
        <form style={{marginTop: "1rem"}}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"1rem"}}>Sign In</button>
      
            </form>            

    )
}

export default SignInForm;