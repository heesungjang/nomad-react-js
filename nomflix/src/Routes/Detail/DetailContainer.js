import React from "react";
import DetailPresenter from "components/DetailPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = { result: null, error: null, loading: true };

    render() {
        const { result, popular, error, loading } = this.state;
        return (
            <DetailPresenter result={result} error={error} loading={loading} />
        );
    }
}
