import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    position: relative;
    padding: 1.5rem 1.5rem 0rem 1.5rem;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - .6rem);
    height: calc(100% - .5rem);
    transform: translate(6rem, 3.5rem);
`

const MainContainer = ({ children }) => <StyledContainer>{children}</StyledContainer>

export default MainContainer;