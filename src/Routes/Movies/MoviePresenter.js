import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import ErrorMessage from 'Components/ErrorMessage';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 20px 20px;
`;

function MoviePresenter({ movieUpcoming, moviePopular, movieNowPlaying }) {
    const { upcoming } = movieUpcoming;
    const { popular } = moviePopular;
    const { nowPlaying } = movieNowPlaying;

    const { loading: upcomingLoading } = movieUpcoming;
    const { loading: popularLoading } = moviePopular;
    const { loading: nowPlayingLoading } = movieNowPlaying;

    const { error: upcomingError } = movieUpcoming;
    const { error: popularError } = moviePopular;
    const { error: nowPlayingError } = movieNowPlaying;

    return nowPlayingLoading && popularLoading && upcomingLoading ? (
        <Loader />
    ) : (
        <Container>
            {/* {console.log(movieNowPlaying)} */}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">
                    {upcoming.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={
                                movie.original_title.length > 15
                                    ? `${movie.original_title.substring(0, 18)}...`
                                    : movie.original_title
                            }
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={
                                movie.original_title.length > 15
                                    ? `${movie.original_title.substring(0, 18)}...`
                                    : movie.original_title
                            }
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}

            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={
                                movie.original_title.length > 15
                                    ? `${movie.original_title.substring(0, 18)}...`
                                    : movie.original_title
                            }
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}

            {upcomingError && <ErrorMessage color="#d63031" text={upcomingError} />}
            {popularError && <ErrorMessage color="#d63031" text={popularError} />}
            {nowPlayingError && <ErrorMessage color="#d63031" text={nowPlayingError} />}
        </Container>
    );
}

MoviePresenter.propTypes = {
    movieUpcoming: PropTypes.object,
    moviePopular: PropTypes.object,
    movieNowPlaying: PropTypes.object,
};

export default MoviePresenter;
