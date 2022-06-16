import React from "react";
import PropTypes from "prop-types";

export default function HeadingOne(props) {
  const { title } = props;
  return (
    <h1 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center mb-4">
      {title}
    </h1>
  );
}

HeadingOne.propTypes = {
  title: PropTypes.string.isRequired,
};