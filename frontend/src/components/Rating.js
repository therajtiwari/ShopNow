import React from "react";
import PropTypes from "prop-types";

function Rating({ rating, reviewCount, color }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {numbers.map((number) => (
        <span
          style={number == 5 ? { marginRight: "10px" } : { marginRight: "1px" }}
        >
          <i
            style={{ color: color }}
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
      <span>{reviewCount ? reviewCount : 0} Reviews</span>
    </div>
  );
}

Rating.defaultProps = {
  color: "green",
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
