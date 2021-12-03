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
        setSharedImage('');
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

export default PostModal