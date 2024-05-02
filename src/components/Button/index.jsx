import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[21px]" };
const variants = {
  fill: {
    red_A200: "bg-red-A200 text-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    red_600_01: "bg-red-600_01",
    white_A700_19: "bg-white-A700_19",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700_19",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_A200",
    "blue_gray_900_01",
    "red_600_01",
    "white_A700_19",
  ]),
};

export { Button };
