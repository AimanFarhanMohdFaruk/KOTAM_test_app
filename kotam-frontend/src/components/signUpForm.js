import React from 'react';

const SignUpForm = () => {
    return (
        <form style={{marginTop: "1rem"}}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"1rem"}}>Sign Up</button>
                <p className="forgot-password text-right" style={{marginTop:"0.5rem"}}>
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>            

    )
}

export default SignUpForm;