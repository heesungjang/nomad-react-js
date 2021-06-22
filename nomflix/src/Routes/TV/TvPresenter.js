import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TvPresenter = ({ topRated, popular, airingTody, loading, error }) => null;

TvPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingTody: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default TvPresenter;
