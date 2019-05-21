import React, { Component } from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { Formik } from 'formik'
import { history } from '../../helpers/History'

import environment from '../../relay/Environment'
import LoginMutation from '../../mutation/LoginMutation'

import {GlobalStyle, Row, Col} from '../../common/index'

export default class Login extends Component {

    componentDidMount() {
        const authenticated = localStorage.getItem("token")
        if(authenticated)
            history.push('/')
    }

    login = ({ email, password }) => {
        LoginMutation.commit({
            environment,
            input: { email, password },
            onCompleted: ({ LoginEmail }) => {
                const { token } = LoginEmail
                if (token !== null) {
                    localStorage.setItem("token", token)
                    history.push('/')
                }
            },
            onError: (errors) => console.log(errors)
        })
    }
    render() {
        return (
            <>
            <GlobalStyle/>
            <Row justify="center" align="center">
                <Col span={6} justify="center" align="center">
                    <LoginForm>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => {
                                this.login(values)
                            }}
                            render={({ handleSubmit, handleChange, handleBlur, errors, values }) => (
                                <form action="POST" onSubmit={handleSubmit}>
                                    <FormHead>
                                        <h1>rbaf manager</h1>
                                    </FormHead>
                                    <div>
                                        <Input type="text" name="email" onChange={handleChange} onBlur={handleBlur} placeholder="login" />
                                        <Input type="password" name="password" onChange={handleChange} onBlur={handleBlur} placeholder="password" />
                                        <div>
                                            <BtnSignIn type="submit">sign in</BtnSignIn>
                                            {/* <BtnSignUp>sign up</BtnSignUp> */}
                                        </div>
                                    </div>
                                </form>
                            )}
                        />
                    </LoginForm>
                </Col>
            </Row>
            </>
        )
    }
}

const pColor = '#1bad9f'
const pColorLight = '#60dfd0'
const pColorDark = '#007d71'
const FontFamily = `'Roboto', sans-serif;`

const BtnDefault = `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    width: 100%;

    padding: .81rem .7692rem;
    font-family: ${FontFamily};
    font-size: 1.6rem;
    text-transform: uppercase;
    border: none;
`

const BtnHoverDefault = `
    background-color: ${pColorDark};
    cursor: pointer;
`

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  padding: 2rem 1rem;
  max-width: 30rem;
  border-radius: .4rem;
  box-shadow: .2rem .5rem 1.5rem rgba(0, 0, 0, 0.34901960784313724);

  h1 {
    color: ${pColor};
    font-size: 2rem;
    margin: 5px;
    text-transform: uppercase;
  }    

form { 
    margin: 0;

    input {
        display: block;
        width: 100%;
        padding: .8rem;
        margin-bottom: .5rem;
    }
}
`

const FormHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
        font-size: 2rem;
        margin: 5px;
       } 
    }
`

const Input = styled.input`
  border: 1px solid lightgray;
  background: white;
  
  &[type="text"] {
    font-family: ${FontFamily};
    font-size: 1rem;
    color: black;
  }
  
  &::placeholder {
    color: lightgray;
    font-family: $fontFamily;
    font-size: 1rem;
  }
`

const BtnSignIn = styled.button`
    ${BtnDefault}
    color: white;
    background-color: ${pColor};
  
    &:hover {
      ${BtnHoverDefault};
      transition: background-color 0.3s;
    }
`

const BtnSignUp = styled.button`
    ${BtnDefault}   
    background-color: transparent;
    border: 1px solid ${pColor};
    color: ${pColor};
  
    &:hover {
      ${BtnHoverDefault};
      color: white;
      transition: 0.3s;
    }
`