import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    font-size: 1.3rem;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 18rem;
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    position: relative;
    margin-bottom: 5px;

    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 5px;
    /* font-size: 1.3rem; */
`;

const Year = styled.span`
    /* font-size: 1.3rem; */
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, title, rating, year, imageUrl, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                {console.log(imageUrl)}
                <Image
                    bgUrl={
                        imageUrl
                            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                            : require('../assets/noPosterSmall.png').default
                    }
                ></Image>
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐
                    </span>
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);
export default Poster;
