import React from "react";
import PropTypes from "prop-types";

function Rating({ rating, reviewCount, color, size }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {numbers.map((number) => (
        <span
          key={number}
          style={
            number === 5 ? { marginRight: "10px" } : { marginRight: "1px" }
          }
        >
          <i
            style={{ color: color, fontSize: size }}
            className={
              rating >= number
                ? "fas fa-star"
                : rating >= number - 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span style={size > 1 ? { fontSize: "1rem" } : { fontSize: "1rem" }}>
        {reviewCount ? reviewCount : 0} Reviews
      </span>
    </>
  );
}

Rating.defaultProps = {
  color: "green",
  size: "1rem",
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
