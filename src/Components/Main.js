import React from 'react';
import styled from "styled-components";

function Main(props) {
    return (
        <Container>
            <ShareBox>Share</ShareBox>
            <div>
                <img src="/project-img/user.svg" alt="user" />
                <button>Share a post</button>
            </div>

            <div>
                <button>
                    <img src="/project-img/photo.svg" alt="photo icon" />
                </button>
            </div>
        </Container>
    )
};

const Container = styled.div`
    grid-area: main;
`

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    border-radius: 0px 0px 0px 1px rgb(0 0 0 / 15%), 0px 0px 0px rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0px 0px 8px 0px;
    background: #fff;
`;

export default Main;
