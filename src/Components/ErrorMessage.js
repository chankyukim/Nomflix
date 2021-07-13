import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    /* width: 100vw; */
    display: flex;
    font-size: 1.6rem;
    justify-content: center;
    :not(:last-child) {
        margin-bottom: 10rem;
    }
`;

const ErrorText = styled.span`
    color: ${props => props.color};
`;

const ErrorMessage = ({ color, text }) => (
    <Container>
        <ErrorText color={color}>{text}</ErrorText>
    </Container>
);

ErrorMessage.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ErrorMessage;
