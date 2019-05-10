import React, { Component } from 'react';
import styled from 'styled-components';

import { Row, Col } from '../../common/Columns'

export default class Login extends Component {
    render() {
        return (
            <Row justify="center" align="center">
                <Col span={6} justify="center" align="center">
                    <LoginForm>
                        <form action="">
                            <FormHead>
                                <h1>rbaf manager</h1>
                            </FormHead>
                            <div>
                                <Input type="text" placeholder="login" />
                                <Input type="password" placeholder="password" />
                                <div>
                                    <BtnSignIn type="submit">sign in</BtnSignIn>
                                    <BtnSignUp>sign up</BtnSignUp>
                                </div>
                            </div>
                        </form>
                    </LoginForm>
                </Col>
            </Row>
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

const BtnSignIn = styled.button `
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