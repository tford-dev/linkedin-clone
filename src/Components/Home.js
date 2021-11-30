import React from 'react'
import styled from "styled-components";
import Header from "./Header"

function Home() {
    return (
        <Container>
            <Header />
            <Section>
                <h5>
                    <a>Hiring in a hurry? - </a>
                </h5>
                <p>
                    Find talented pros in record time with Upwork and keep business moving.
                </p>
            </Section>
            <Layout>
            </Layout>
        </Container>
    )
}

export default Home

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

// const Content = styled.div`
//     max-width: 1128px;
//     margin-left: auto;
//     margin-right: auto;
// `
