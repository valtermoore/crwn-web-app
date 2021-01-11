import React from 'react';

import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import '../../style/sign-in.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            // will try to confirm the user's email and password
            await auth.signInWithEmailAndPassword(email, password);

            // when succeeded will empty the field
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            alert('Email or password is invalid');
        }

        //console.log(this.state);
    }

    // will set the input values to the state
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;
