import { movieApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    constructor(props) {
        super(props);
        const {
            location: { pathname },
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMoive: pathname.includes("/movie/"),
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = this.props;
        const { isMoive } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }

        let result = null;
        try {
            if (isMoive) {
                const request = await movieApi.movieDetail(parsedId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parsedId);
                result = request.data;
            }
        } catch (error) {
            this.setState({ error: "Sorry, it is not found" });
        } finally {
            this.setState({ loading: false, result });
        }
    }
    render() {
        const { result, error, loading } = this.state;
        console.log(result);
        return (
            <DetailPresenter result={result} error={error} loading={loading} />
        );
    }
}
