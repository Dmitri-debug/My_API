// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"12"}
        cy={"12"}
        r={"10"}
        stroke={"#D4A373"}
        strokeWidth={"2"}
        fill={"none"}
      ></circle>

      <circle cx={"12"} cy={"6"} r={"2"} fill={"#E6B87D"}></circle>

      <circle cx={"6"} cy={"12"} r={"2"} fill={"#E6B87D"}></circle>

      <circle cx={"12"} cy={"18"} r={"2"} fill={"#E6B87D"}></circle>

      <circle cx={"18"} cy={"12"} r={"2"} fill={"#E6B87D"}></circle>

      <path stroke={"#D4A373"} strokeWidth={"2"} d={"M12 8v8m-4-4h8"}></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
