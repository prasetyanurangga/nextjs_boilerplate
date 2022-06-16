import React from "react";
import PropTypes from "prop-types";

export default function HeadingThree(props) {
  const { title } = props;
  return (
    <h3 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center mb-4">
      {title}
    </h3>
  );
}

HeadingThree.propTypes = {
  title: PropTypes.string.isRequired,
};