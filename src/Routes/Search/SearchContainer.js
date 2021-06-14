import { moviesApi, tvApi } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
    state = {
        movieResult: null,
        tvResults: null,
        searchTerm: '',
        loading: false,
        error: null,
    };

    //폼에서 텍스트를 입력하고 엔터를 누르는게 handleSubmit이다.
    handleSubmit = () => {
        const { searchTerm } = this.state;
        // console.log(searchTerm);
        if (searchTerm !== '') {
            this.searchByTerm();
        }
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        // console.log(searchTerm);

        this.setState({
            loading: true,
        });

        try {
            const {
                data: { results: movieResult },
            } = await moviesApi.search(searchTerm);

            const {
                data: { results: tvResult },
            } = await tvApi.search(searchTerm);

            this.setState({
                movieResult,
                tvResult,
            });
        } catch {
            this.setState({
                error: "Can't find results.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const { movieResult, tvResults, searchTerm, loading, error } = this.state;
        {
            console.log(this.state);
        }
        return <SearchPresenter movieResult={movieResult} tvResults={tvResults} searchTerm={searchTerm} loading={loading} error={error} handleSubmit={this.handleSubmit} />;
    }
}
