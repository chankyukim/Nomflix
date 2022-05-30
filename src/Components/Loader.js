import React from 'react';
import styled from 'styled-components';
import loading from '../assets/loading.svg';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    margin-top: 20px;
`;

const LoadingImg = styled.img.attrs({
    src: loading,
})`
    width: 20rem;
    height: 20rem;
`;
const Loader = () => (
    <Container>
        <LoadingImg></LoadingImg>
        {/* <img src={loading} alt="loading img" /> */}
    </Container>
);

export default Loader;
