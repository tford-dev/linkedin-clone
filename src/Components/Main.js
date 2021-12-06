import {React, useState} from 'react';
import styled from "styled-components";
import PostModal from "./PostModal";
import { connect } from 'react-redux';

function Main(props) {
    const [showModal, setShowModal] = useState("close");
    const handleClick = (e) => {
        e.preventDefault();
        if(e.target !== e.currentTarget) {
            return;
        }

        switch(showModal){
            case "open":
                setShowModal("close");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    }
    return (
    <div>
        <Container>
            <ShareBox>
                <div>
                    { 
                        //If a user is signed in, it displays their Google profile pic
                        props.user && props.user.photoURL ?
                        <img src={props.user.photoURL} alt="user" />
                        :
                        //If not, it displays the app's default pic
                            <img src="/project-img/user.svg" alt="user" />
                    }
                    <button
                        onClick = {handleClick}
                        disabled = {props.loading ? true : false}
                        className='post-space'>
                        Share a post
                    </button>
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
            <Content>
                {   
                    props.loading && <img src="./project-img/loading.gif" />
                }
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/project-img/user.svg" alt="user" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="/project-img/ellipsis.svg" alt="ellipsis" />
                        </button>
                    </SharedActor>

                    <Description>
                        Description
                    </Description>
                        <SharedImg>
                            <a>
                                <img src="/project-img/shared-image.png" alt="Shared" />
                            </a>
                        </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img 
                                    src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                                    alt="Like"
                                />
                                <img 
                                    src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                                    alt="Clap"
                                />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>
                                2 comments
                            </a>
                        </li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <i className="far fa-thumbs-up"></i>
                            <span>Like</span>
                        </button>
                        <button>
                            <i className="far fa-comment"></i>
                            <span>Comments</span>
                        </button>
                        <button>
                            <i className="fas fa-share"></i>
                            <span>Share</span>
                        </button>
                        <button>
                            <i className="far fa-paper-plane"></i>
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
            </Content>
            <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
    </div>
    );
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

            //Sizes profile image to fit
            img {
                width: 48px;
                margin-right: 8px;
                border-radius: 50%;
            }

            //Styles buttons in sharebox
            button {
                margin: 4px 0px;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-radius: 35px;
                background-color: #fff;
                text-align: left;
            }
        }

        //Aligns buttons in sharebox
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

const Article = styled(CommonCard)`
    padding: 0px;
    margin: 0px 0px 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0px;
    margin-bottom: 8px;
    align-items: center;
    display: flex;

    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span {
                text-align: left;

                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        right: 12px;
        outline: none;
        border: none;
        top: 0;
        background: transparent;
        cursor: pointer;
    }
`;

const Description = styled.div`
    padding: 0px 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCounts = styled.div`
    line-height: 100%;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0px 16px;
    padding: 8px 0px;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li {
        margin-right: 5px;
        font-size: 12px;
        button {
            display: flex;
            border: none;
            background: #fff;
        }
    }

    img {
        width: 18px;
    }
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;
        border: none;
        background-color: #fff;

        @media(min-width: 768px){
            span {
                margin-left: 8px;
            }
        }
    }
`;

const Content = styled.div`
    text-align: center;
    & > img {
        width: 30px;
    }
`;

const mapStateToProps = (state) => {
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
