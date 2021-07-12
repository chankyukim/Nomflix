import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';

const Container = styled.div`
    padding: 20px 20px;
`;

function HomePresenter({ movieNowPlaying, moviePopular, movieUpcoming }) {
    const { nowPlaying } = movieNowPlaying;
    const { popular } = moviePopular;
    const { upcoming } = movieUpcoming;
    const { loading: nowPlayingLoading } = movieNowPlaying;
    const { loading: popularLoading } = moviePopular;
    const { loading: upcomingLoading } = movieUpcoming;

    return nowPlayingLoading && popularLoading && upcomingLoading ? (
        <Loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">{nowPlaying.map(movie => movie.title)}</Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular">{popular.map(movie => movie.title)}</Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">{upcoming.map(movie => movie.title)}</Section>
            )}
        </Container>
    );
}

HomePresenter.propTypes = {
    movieNowPlaying: PropTypes.object,
    moviePopular: PropTypes.object,
    movieUpcoming: PropTypes.object,
};

export default HomePresenter;
