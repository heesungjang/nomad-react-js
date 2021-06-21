import React from "react";
import SearchContainer from "./SearchPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: null,
        error: null,
        loading: false,
    };

    render() {
        const { searchTerm, tvResults, movieResults, error, loading } =
            this.state;

        return (
            <SearchContainer
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
            />
        );
    }
}
