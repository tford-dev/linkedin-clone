import React from 'react';
import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="project-img/login-logo.png" alt="login-img"/>
                </a>
            </Nav>
        </Container>
    )
}

const Container= styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    paddingL 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

export default Login;