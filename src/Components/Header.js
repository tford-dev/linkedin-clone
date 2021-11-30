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

const Container = styled.div``

const Content = styled.div``

const Logo = styled.span``