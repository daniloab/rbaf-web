import React from 'react'
import styled, { keyframes } from 'styled-components';
import {MdFlashOn} from 'react-icons/md'

import global from '../helpers/Global'

export const LoaderItems = styled.div``
export const Loader = styled.div``

const fadein = keyframes`{
    from { opacity: 0; }
    to   { opacity: 1; }
}`

const fadeout = keyframes`
    from { opacity: 1; }
    to   { opacity: 0; }
`

const spin = keyframes`
    from  {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const flip = keyframes`
    0% { transform: scaleX(0);}
    50% { transform: scaleX(-1)}
    100% { transform: scaleX(0);}
`

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    background: white;

    &.visible {
        visibility: visible;
        animation: ${fadein} 0.5s;
    }

    &.hide {
        visibility: hidden;
        transition: visibility 0s 0.5s;
        animation: ${fadeout} 0.5s !important;
    }

    ${LoaderItems} {
        display: flex;
        align-items: center;
        justify-content: center;

        ${Loader} {
            border: .1rem solid transparent;
            border-top: .1rem solid ${global.style.primaryColor};
            border-radius: 50%;
            width: 100px;
            height: 100px;
            animation: ${spin} 2s linear infinite;
        }

        svg {
            width: 6rem;
            height: 6rem;
            position: absolute;
            color: ${global.style.primaryColor};;
            animation: ${flip} 2s linear infinite;
        }
    }
`;



export default props => (
    <LoaderWrapper className={props.loading ? 'visible' : 'hide'}>
        <LoaderItems>
            <Loader />
            <MdFlashOn/>
        </LoaderItems>
    </LoaderWrapper>
)