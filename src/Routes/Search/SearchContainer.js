import { moviesApi, tvApi } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: '',
        loading: false,
        error: null,
    };

    //폼에서 텍스트를 입력하고 엔터를 누르는게 handleSubmit이다.
    handleSubmit = e => {
        e.preventDefault();
        const { searchTerm } = this.state;
        // console.log(searchTerm);
        if (searchTerm !== '') {
            this.searchByTerm();
        }
    };

    updateTerm = e => {
        const {
            target: { value },
        } = e;
        // console.log(value);
        this.setState({
            searchTerm: value,
        });
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        // console.log(searchTerm);

        this.setState({
            loading: true,
        });

        try {
            const {
                data: { results: movieResults },
            } = await moviesApi.search(searchTerm);

            const {
                data: { results: tvResults },
            } = await tvApi.search(searchTerm);

            this.setState({
                movieResults,
                tvResults,
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
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        // {
        //     console.log(this.state);
        // }
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}

export default SearchContainer;
