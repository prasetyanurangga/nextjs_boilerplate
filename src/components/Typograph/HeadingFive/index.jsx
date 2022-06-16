import React from "react";
import PropTypes from "prop-types";

export default function HeadingFive(props) {
  const { title } = props;
  return (
    <h5 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center mb-4">
      {title}
    </h5>
  );
}

HeadingFive.propTypes = {
  title: PropTypes.string.isRequired,
};