import React from "react";
import "bulma/css/bulma.css";

const buttonsList = [
  {
    isActive: "is-active",
    isBlack: "is-black",
    isCentered: "is-centered",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white",
  },
];

const CoolButton = (props) => {
  return (
    <div>
      <button
        className={`button ${props.className} 
        ${props.isDanger && "is-danger"} 
        ${props.isSmall && "is-small"} 
        ${props.isSuccess && "is-success"}
        ${props.isInfo && "is-info"} 
        ${props.isPrimary && "is-primary"}`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default CoolButton;
