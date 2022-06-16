import React from "react";
import PropTypes from "prop-types";

export default function BodyTwo(props) {
  const { text } = props;
  return (
    <p className="text-base leading-7">
      {text}
    </p>
  );
}

BodyTwo.propTypes = {
  text: PropTypes.string.isRequired,
};