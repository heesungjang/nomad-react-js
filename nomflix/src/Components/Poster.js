import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
    font-size: 12px;
`;
const Image = styled.div`
    background-image: url(${(props) =>
        `https://image.tmdb.org/t/p/w300${props.bgUrl}`});
    height: 180px;
    background-size: cover;
    border-radius: :4px;
    background-position: center center;
    transition: opacity 0.2s linear;
`;
const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    position: absolute;
    opacity: 0;
`;
const Title = styled.span`
    margin-bottom: 3px;
    display: block;
`;
const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;
const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl} />
                <Rating>
                    <span rol="img" aria-label="rating">
                        🌟
                        {rating}/10
                    </span>
                </Rating>
            </ImageContainer>
            <Title>
                {title.length > 15 ? `${title.substring(0, 15)}...` : title}
            </Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
};

export default Poster;
