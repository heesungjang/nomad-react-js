import { movieApi, tvApi } from "api";
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

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    };

    searchByTerm = async (term) => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const {
                data: { results: movieResults },
            } = await movieApi.search(searchTerm);

            const {
                data: { results: tvResults },
            } = await tvApi.search(searchTerm);
            this.setState({
                searchTerm,
                movieResults,
                tvResults,
            });
        } catch (error) {
            this.setState({
                error: "Sorry, movie was not found..try again",
            });
        } finally {
            this.setState({ loading: false });
        }
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
                handleSubmit={this.handleSubmit}
            />
        );
    }
}
