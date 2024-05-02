import React from "react";

const sizeClasses = {
  txtPoppinsRegular1581RedA200: "font-normal font-poppins",
  txtPoppinsMedium1581: "font-medium font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsRegular1581Gray60001: "font-normal font-poppins",
  txtPromptMedium16: "font-medium font-prompt",
  txtPoppinsSemiBold5928: "font-poppins font-semibold",
  txtPoppinsMedium2371WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular1383: "font-normal font-poppins",
  txtPoppinsRegular1581: "font-normal font-poppins",
  txtHelveticaRoundedBold100: "font-bold font-helveticarounded",
  txtPoppinsMedium1778Gray900a2: "font-medium font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsRegular1976RedA200: "font-normal font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsRegular1976: "font-normal font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular1581WhiteA700a2: "font-normal font-poppins",
  txtPoppinsRegular1976Black900: "font-normal font-poppins",
  txtHindRegular24: "font-hind font-normal",
  txtPoppinsMedium2371: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsMedium1778: "font-medium font-poppins",
  txtPoppinsMedium1976: "font-medium font-poppins",
  txtInterMedium16: "font-inter font-medium",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold4347: "font-poppins font-semibold",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular12WhiteA700cc: "font-normal font-poppins",
  txtPoppinsMedium46: "font-medium font-poppins",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsMedium16Bluegray90001: "font-medium font-poppins",
  txtPoppinsSemiBold43: "font-poppins font-semibold",
  txtPoppinsSemiBold4347Gray900: "font-poppins font-semibold",
  txtPlayfairDisplayRomanRegular58: "font-normal font-playfairdisplay",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
