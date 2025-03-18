// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
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

      <path
        d={"M4 20V4h16v16H4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        fill={"none"}
      ></path>

      <path
        d={"M6 16l4-4 4 3 4-5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <circle cx={"6"} cy={"16"} r={"1.5"} fill={"currentColor"}></circle>

      <circle cx={"10"} cy={"12"} r={"1.5"} fill={"currentColor"}></circle>

      <circle cx={"14"} cy={"15"} r={"1.5"} fill={"currentColor"}></circle>

      <circle cx={"18"} cy={"10"} r={"1.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
