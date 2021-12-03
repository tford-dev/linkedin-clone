import {React, useState} from 'react';
import styled from 'styled-components';
import ReactPlayer  from 'react-player';
import { connect } from 'react-redux';
import firebase from 'firebase';
import {postArticleAPI} from '../actions';


const PostModal = (props) =>{
    const [editorText, setEditorText] = useState('');
    const [sharedImg, setSharedImg] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [assetArea, setAssetArea] = useState('');

    const handleChange = (e) => {
        const image = e.target.files[0];
        if(image === '' || image === undefined)
        {
            alert(`not an image, the is a ${typeof image}`);
            return;
        }
        setSharedImg(image);
    };

    const switchAssetArea = (area) => {
        setSharedImg('');
        setVideoLink('');
        setAssetArea(area);
    };

    const postArticle = (e) => {
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }

        const payload = {
            image: sharedImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };
        props.postArticle(payload);
        reset(e);
    };

    const reset = (e) => {
        setEditorText("");
        setSharedImage('');
        setVideoLink('');
        setAssetArea('');
        props.handleClick(e);
    }

    return (
        <div>
            {props.showModal === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(event)=> reset(event)}>
                                <i class="far fa-window-close"></i>
                            </button>
                        </Header>

                        <SharedContent>
                            <UserInfo>
                                {props.user.photoURL ? (
                                    <img src={props.user.photoURL} />
                                ) : (
                                    <img src="/project-img/user.svg" alt="user" />
                                )}  
                            </UserInfo>

                            <Editor>
                                <textarea 
                                    value={editorText}
                                    onChange={e => setEditorText(e.target.value)}
                                    placeholder="What do you like to talk aboue?"
                                    onFocus={true}
                                />
                                {
                                    assetArea === 'image' ? (
                                        <UploadImage>
                                            <input
                                                type="file"
                                                accept='image/gif, image/jgp, image/png, image/jpeg'
                                                id="file"
                                                style={{display: "none"}}
                                                onChange = {handleChange}
                                            />
                                            <p>
                                                <label
                                                    htmlFor="file"
                                                    style={{cursor: "pointer"}}
                                                >
                                                    Select an image
                                                </label>
                                            </p>
                                        {sharedImg && <img src={URL.createObjectURL(sharedImage)} />}
                                        </UploadImage>
                                    ) : (
                                        assetArea === 'media' && (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Please upload a video"
                                                    value={videoLink}
                                                    onChange = {e => setVideoLink(e.target.value)}
                                                />
                                                {videoLink && (
                                                    <ReactPlayer width={"100%"} url={videoLink} />
                                                )}
                                            </div>
                                        )
                                    )}
                            </Editor>
                        </SharedContent>
                    </Content>
                </Container>
            }
        </div>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: #000000;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: #fff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`;

const Header = styled.div`
    display: block;
    padding: 16px 28px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        height: 48px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);

        i {
            pointer-events: none;
        }
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    svg, img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
        margin-right: 5px;
    }

    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
    }
`;

const Editor = styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const UploadImage = styled.div`
    text-align: center;

    img {
        width: 100%;
    }
`;


export default PostModal