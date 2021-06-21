import React from "react";
import TvPresenter from "./TvPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        airingToday: null,
        popular: null,
        topRated: null,
        loading: true,
        error: null,
    };

    render() {
        const { airingToday, popular, topRated, loading, error } = this.state;
        return (
            <TvPresenter
                airingToday={airingToday}
                popular={popular}
                topRated={topRated}
                loading={loading}
                error={error}
            />
        );
    }
}
