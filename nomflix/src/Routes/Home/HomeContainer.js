import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying },
            } = await movieApi.nowPlaying();

            const {
                data: { results: upcoming },
            } = await movieApi.upcoming();

            const {
                data: { results: popular },
            } = await movieApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular,
            });
        } catch (error) {
            this.setState({
                error: "Movie is not found, please try again later",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}
