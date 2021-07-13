import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Poster from 'Components/Poster';
import ErrorMessage from 'Components/ErrorMessage';

const Container = styled.div`
    padding: 20px 20px;
`;

const TVPresenter = ({ tvTopRated, tvPopular, tvAiringToday }) => {
    const { topRated } = tvTopRated;
    const { popular } = tvPopular;
    const { airingToday } = tvAiringToday;

    const { loading: topRatedLoading } = tvTopRated;
    const { loading: popularLoading } = tvPopular;
    const { loading: airingTodayLoading } = tvAiringToday;

    const { error: topRatedError } = tvTopRated;
    const { error: popularError } = tvPopular;
    const { error: airingTodayError } = tvAiringToday;

    return topRatedLoading && popularLoading && airingTodayLoading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated">
                    {topRated.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={
                                show.original_name.length > 15
                                    ? `${show.original_name.substring(0, 18)}...`
                                    : show.original_name
                            }
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                            imageUrl={show.poster_path}
                        />
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={
                                show.original_name.length > 15
                                    ? `${show.original_name.substring(0, 18)}...`
                                    : show.original_name
                            }
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                            imageUrl={show.poster_path}
                        ></Poster>
                    ))}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">
                    {airingToday.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={
                                show.original_name.length > 15
                                    ? `${show.original_name.substring(0, 18)}...`
                                    : show.original_name
                            }
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                            imageUrl={show.poster_path}
                        ></Poster>
                    ))}
                </Section>
            )}

            {topRatedError && <ErrorMessage color="#d63031" text={topRatedError} />}
            {popularError && <ErrorMessage color="#d63031" text={popularError} />}
            {airingTodayError && <ErrorMessage color="#d63031" text={airingTodayError} />}
        </Container>
    );
};
export default TVPresenter;
