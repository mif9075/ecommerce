import React, { Component } from 'react'
import { connect } from 'react-redux';

import './Signin.css';
import formArray from './SigninConfig';
import Input from '../../Factory/Input/InputClass';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Spinner from '../../Factory/Spinner';
import ButtonClass from '../../Factory/Button/ButtonClass';
import { signin, setAuthSuccessUser} from '../../redux/action/authUserAction'


export class Signin extends Component {

    componentDidMount() {
        if (this.props.authUser.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    state = {
        formData: {
            email: '',
            password: ''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    successfullySignedUp = () => {
        this.setState({
            submitted: false,
            formData: {
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            submitted: true,
        }, () => {
            this.props.signin(this.state.formData)
            .then(() =>{
                this.props.history.push('/');
            })
            .catch(() => {
                this.setState({
                    submitted: false
                })
            });
        })
    }

    render() {

        const {submitted} = this.state;

        let form =(
            formArray.map((field) => {

                return(
                    <div key= {field.input.label}>
                        <Input
                        {...field}

                        {...this.state.formData}
                        handleInputChange={this.handleChange}
                        />
                        <br />
                    </div>
                )
            })
        )
        return (
            <>
                <ValidatorForm className='Form' onSubmit={this.handleSubmit}>
                {
                    submitted ? <Spinner /> : form
                }
                <br />

                <ButtonClass
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                    >
                {
                    (submitted && 'Your form is submitted!') || (!submitted && 'Submit')
                }
                </ButtonClass>

                </ValidatorForm>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps, {
    setAuthSuccessUser, signin })(Signin)

