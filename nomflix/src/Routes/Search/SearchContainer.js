import React from "react";
import SearchContainer from "./SearchPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        airingToday: null,
        popular: null,
        topRated: null,
        error: null,
        loading: true,
    };

    render() {
        const { airingToday, popular, topRated, error, loading } = this.state;

        return (
            <SearchContainer
                airingToday={airingToday}
                popular={popular}
                topRated={topRated}
                loading={loading}
                error={error}
            />
        );
    }
}
