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
            </ArtCard>
        </Container>
    )
}

const Container = styled.div``;

const ArtCard = styled.div``;

const UserInfo = styled.div``;

const CardBackground = styled.div``;

const Photo = styled.div``;

const Link = styled.div``;

const AddPhotoText = styled.div``;

export default Leftside;
