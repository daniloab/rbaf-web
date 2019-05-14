import React from 'react';
import styled from 'styled-components';
import {
    MdHome,
    MdSupervisorAccount
} from 'react-icons/md'
import { Router, Link } from 'react-router-dom'
import { history } from '../helpers/History'

import global from '../helpers/Global'

const Content = styled.div``

const StyledSideBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: auto;
    min-width: 6rem;
    height: 100%;  
    background: white;
    z-index:1;


    ${Content} {
        margin-top: 5.5rem;
        display: flex;
        justify-content: center;

        ul {
            margin: 0;
            padding: 0;
    
            li {
                list-style-type: none;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
           
                color: ${global.style.primaryColor}
                font-size: 1.2rem;
                text-transform: uppercase;

                &:hover{
                    cursor: pointer;
                    color: white;
                    background: ${global.style.primaryColorHover};
                    transition: all 0.3s ease-in-out;
                }

                svg {
                    margin: .5rem;
                }
            }
    
        }
    }    
`;


const SideBar = () => (
    <>
        <Router history={history}>
            <StyledSideBar>
                <Content>
                    <ul>
                        <Link to="/">
                            <li>
                                <MdHome size={20} />
                            </li>
                        </Link>
                        <Link to="/atletas">
                            <li>
                                <MdSupervisorAccount size={20} />
                            </li>
                        </Link>
                    </ul>
                </Content>
            </StyledSideBar>
        </Router>
    </>
);

export default SideBar;
