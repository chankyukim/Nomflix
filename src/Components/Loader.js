import React from 'react';
import styled from 'styled-components';
import loading from '../assets/SVG/loading.svg';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const LoadingImg = styled.img.attrs({
    src: loading,
})`
    height: 20rem;
    width: 20rem;
`;

const Loader = () => (
    <Container>
        <LoadingImg />
    </Container>
);

export default Loader;
