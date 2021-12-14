import React from 'react';
import SignUpForm from '../../components/signUpForm';

const SignUp = () => {

    const contentStyle = {
        display: "flex",
        justifyContent: "center",
    }

    return (
        <div class="content" style={contentStyle}>
            <SignUpForm/>
        </div>
    )
}

export default SignUp;