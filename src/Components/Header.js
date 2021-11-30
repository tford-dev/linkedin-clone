import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="project-img/home-logo.png" alt="" />
                    </a>
                </Logo>
            </Content>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0px 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`

const Content = styled.div``

const Logo = styled.span``