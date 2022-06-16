import React from "react";
import PropTypes from "prop-types";

export default function HeadingSix(props) {
  const { title } = props;
  return (
    <h6 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center mb-4">
      {title}
    </h6>
  );
}

HeadingSix.propTypes = {
  title: PropTypes.string.isRequired,
};