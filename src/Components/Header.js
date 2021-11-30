import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="project-img/home-logo.png" alt="home logo" />
                    </a>
                </Logo>

                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="project-img/search-icon.png" alt="search icon" />
                    </SearchIcon>
                </Search>

                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="project-img/nav-home.png" alt="nav home" />
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="project-img/nav-network.png" alt="nav network" />
                                <span>My Network</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="project-img/nav-jobs.png" alt="nav jobs" />
                                <span>Jobs</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="project-img/nav-messaging.png" alt="nav messaging" />
                                <span>Messaging</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="project-img/nav-notifications.png" alt="nav notifications" />
                                <span>notifications</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                <img src="project-img/user.png" alt="user" />
                                <span>Me</span>
                                <img src="project-img/down-icon.png" alt="down" />
                            </a>

                            <SignOut>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>

                        <Work>
                            <a>
                                <img src="project-img/nav-work.png" alt="Nav Work" />
                                <span>
                                    Work
                                    <img src="project-img/down-icon.png" alt="Down" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

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

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0px auto;
    min-height: 100%;
    max-width: 1128px;
`

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div {
        max-width: 280px;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0px 8px 0px 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0px 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span:after {
            content: "";
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-ease-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;

        span {
            color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
        }

        @media (max-width: 768px) {
            min-width: 70px;
        }
    }

    &:hover,
    &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9)
            }
        }
    }
`;

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0px 0px 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
`;

const User = styled(NavList)`
    a > svg {
        width: 24px;
        border-radius: 50%;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        ${SignOut} {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`

export default Header;