import React from 'react';
import styled from 'styled-components';
import { MdDehaze, MdPowerSettingsNew, MdSettings } from 'react-icons/md'

import global from '../../helpers/Global'

export const Title = styled.a``
export const RightNavbar = styled.div``
export const List = styled.ul``
export const Item = styled.li``

export const WrapperLeftContent = styled.div`
    color: white;
    font-weight: 600;
    font-size: 1.8rem;
    height: 5rem;
    display: flex;

    svg {
        margin-right: .5rem;
    }
`

export const HeaderWrapper = styled.header`
    top: 0;
    right: 0;
    left: 0;
    position: fixed;    
    max-height: 5rem;
    z-index: 1030;
    padding: 1.5rem 1rem;
    background: ${global.style.primaryColor};
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

    ${Title} {        
        color: white;
        margin: 0;
        text-decoration: none;

        &:hover {
            cursor: pointer;
        }
    }

    ${RightNavbar} {
        display: flex;
        align-items: center;

        li:hover{
                cursor: pointer;
                background: ${global.style.secondaryColor};
                transition: all 0.3s ease-in-out;

                svg {   
                    color: ${global.style.primaryColor};
                    transition: all 0.3s ease-in-out;
                }
            }
    }

    ${List} {
        display: flex;
        padding-left: 0;
        margin: 0;
        list-style: none;
        
        ${Item} {
            padding: 1rem;

            svg {
                color: white;
                font-size: 2rem;
            }
            
            &:hover {
                cursor: pointer;
                color: #242424d1;
                transition: color 0.3s;
            }
        }
    }
`;

const Header = props => (
    <>
        <HeaderWrapper>
            <WrapperLeftContent>
                <Title href="/">RBAF Manager</Title>
            </WrapperLeftContent>
            <RightNavbar>
                <List>
                    <Item><MdSettings /></Item>
                    <Item><MdPowerSettingsNew /></Item>
                </List>
            </RightNavbar>
        </HeaderWrapper>
    </>
);

export default Header;
