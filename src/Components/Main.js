import React from 'react';
import styled from "styled-components";

function Main(props) {
    return (
        <Container>
            <ShareBox>Share
                <div>
                    <img src="/project-img/user.svg" alt="user" />
                    <button>Share a post</button>
                </div>

                <div>
                    <button>
                        <img src="/project-img/photo-icon.svg" alt="photo icon" />
                        <span>Photo</span>
                    </button>

                    <button>
                        <img src="/project-img/video-icon.svg" alt="video icon" />
                        <span>Video</span>
                    </button>

                    <button>
                        <img src="/project-img/event-icon.svg" alt="event icon" />
                        <span>Event</span>
                    </button>

                    <button>
                        <img src="/project-img/article-icon.svg" alt="article icon" />
                        <span>Article</span>
                    </button>
                </div>
            </ShareBox>
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

    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;

            &:hover {
                background-color: rgba(0, 0, 0, 0.07);
                border-radius: 6px;
            }
        }

        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px;

            img {
                width: 48px;
                margin-right: 8px;
                border-radius: 50%;
            }

            button {
                margin: 4px 0px;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0, 15);
                border-radius: 35px;
                background-color: #fff;
                text-align: left;
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img{
                    margin: 0px 4px 0px -2px;
                }

                span {
                    color: #70b5f9;
                }
            }
        }
    }
`;

export default Main;
