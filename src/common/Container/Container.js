import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    height: 100%;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

export default Container;