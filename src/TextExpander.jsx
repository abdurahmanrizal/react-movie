import PropTypes from "prop-types";
import React, {useState} from "react";
import "./text_expander.css";

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string,
};
export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const buttonStyle = {
    marginLeft: "1rem",
    backgroundColor: "transparent",
    border: "none",
    color: buttonColor,
    cursor: "pointer",
  };
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ");
  return (
    <div className={className}>
      {displayText}
      <button style={buttonStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
