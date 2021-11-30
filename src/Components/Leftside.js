import React from 'react';
import styled from "styled-components";


function Leftside() {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, there!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/project-img/widget-icon.png" alt="widget icon" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/project-img/item-icon.png" alt="item-icon" />
                        My Items
                    </span>
                </Item>
            </ArtCard>


        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 15%), 0px 0px 0px rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgb(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`;

const CardBackground = styled.div`
    background: url("/project-img/card-bg.png");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0px;
`;

const Photo = styled.div`
    box-shadow: none;
    background-image: url("/project-img/photo.png");
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-border-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div``;

const Item = styled.a``;

//const CommunityCard = styled(ArtCard)``;



export default Leftside;
