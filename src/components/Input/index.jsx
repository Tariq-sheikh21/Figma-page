import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    red_A200: "bg-red-A200 text-white-A700",
    white_A700: "bg-white-A700 text-blue_gray-900_95",
    white_A700_19: "bg-white-A700_19 text-white-A700_a2",
  },
  underline: {
    blue_gray_900_01: "border-b border-blue_gray-900_01 text-blue_gray-900_01",
  },
};
const shapes = { round: "rounded-md" };
const sizes = { xs: "pb-[15px] pt-3.5 px-3.5", sm: "pb-6" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "underline",
      color = "blue_gray_900_01",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "underline"]),
  color: PropTypes.oneOf([
    "red_A200",
    "white_A700",
    "white_A700_19",
    "blue_gray_900_01",
  ]),
};

export { Input };
