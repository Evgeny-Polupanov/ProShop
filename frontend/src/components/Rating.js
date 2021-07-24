import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  const countStar = (item) => {
    if (value >= item) {
      return "fas fa-star";
    } else if (value === item - 0.5) {
      return "fas fa-star-half-alt";
    } else {
      return "far fa-star";
    }
  };

  return (
    <div className="rating">
      <span>
        {[1, 2, 3, 4, 5].map((i) => (
          <i key={i} style={{ color }} className={countStar(i)} />
        ))}
      </span>{" "}
      <span>{text}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

Rating.defaultProps = {
  text: "",
  color: "#F8E825",
};

export default Rating;
