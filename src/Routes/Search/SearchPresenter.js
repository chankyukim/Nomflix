import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 0 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;
const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    handleSubmit,
    updateTerm,
    movieResults,
    tvResults,
    searchTerm,
    error,
    loading,
}) => (
    <>
        <Helmet>
            <title>Search | Nomflix</title>
        </Helmet>
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* value값을 주는 이유는 input을 제어하기 위해서이다. */}
                <Input
                    placeholder="Search Movies or TV Shows.."
                    value={searchTerm}
                    onChange={updateTerm}
                ></Input>
            </Form>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {movieResults && movieResults.length > 0 && (
                        <Section title="Movie Results">
                            {movieResults.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date && movie.release_date.substring(0, 4)}
                                    imageUrl={movie.poster_path}
                                    isMovie={true}
                                />
                            ))}
                            {/* {console.log('movieResults', movieResults)} */}
                        </Section>
                    )}
                    {tvResults && tvResults.length > 0 && (
                        <Section title="TV Shows Results">
                            {tvResults.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.original_name}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                                    imageUrl={tv.poster_path}
                                />
                            ))}
                            {/* {console.log('movieResults', movieResults)} */}
                        </Section>
                    )}
                    {error && <Message color="#e74c3c" text={error} />}
                    {tvResults &&
                        movieResults &&
                        tvResults.length === 0 &&
                        movieResults.length === 0 && (
                            <Message text="Nothing found" color="#e74c3c" />
                        )}
                    {/* {console.log('movieResults', movieResults)}
                {console.log('tvResults', tvResults)} */}
                </>
            )}
        </Container>
    </>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;