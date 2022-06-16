import React from "react";
import PropTypes from "prop-types";

export default function BodyOne(props) {
  const { text } = props;
  return (
    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
      {text}
    </p>
  );
}

BodyOne.propTypes = {
  text: PropTypes.string.isRequired,
};