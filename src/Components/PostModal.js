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

export default PostModal