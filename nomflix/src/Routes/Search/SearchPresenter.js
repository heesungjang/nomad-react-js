import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
    padding: 0px 20px;
`;
const Form = styled.form`
    width: 100%;
    margin-bottom: 50px;
`;
const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchContainer = ({
    movieResults,
    tvResults,
    handleSubmit,
    searchTerm,
    loading,
    updateTerm,
    error,
}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or TV shows..."
                value={searchTerm}
                onChange={updateTerm}
            />
        </Form>
        {loading ? (
            <Loader />
        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie results">
                        {movieResults.map((movie) => (
                            <span key={movie.id}>{movie.title}</span>
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Show results">
                        {tvResults.map((show) => (
                            <span key={show.id}>{show.name}</span>
                        ))}
                    </Section>
                )}
            </>
        )}
    </Container>
);

SearchContainer.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired,
};

export default SearchContainer;
