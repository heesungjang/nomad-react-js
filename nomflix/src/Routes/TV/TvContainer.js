import { tvApi } from "api";
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

    async componentDidMount() {
        try {
            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();
            const {
                data: { results: popular },
            } = await tvApi.popular();

            const {
                data: { results: topRated },
            } = await tvApi.topRated();

            this.setState({
                airingToday,
                popular,
                topRated,
            });
        } catch (error) {
            this.setState({
                error: "Sorry..shows were not found, please try again",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

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
