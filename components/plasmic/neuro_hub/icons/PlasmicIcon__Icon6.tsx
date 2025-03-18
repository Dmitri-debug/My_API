// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
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

      <circle cx={"12"} cy={"6"} r={"2"} fill={"#000"}></circle>

      <circle cx={"6"} cy={"12"} r={"2"} fill={"#000"}></circle>

      <circle cx={"12"} cy={"18"} r={"2"} fill={"#000"}></circle>

      <circle cx={"18"} cy={"12"} r={"2"} fill={"#000"}></circle>

      <path stroke={"#000"} strokeWidth={"2"} d={"M12 8v8"}></path>

      <path stroke={"#D000000"} strokeWidth={"2"} d={"M8 12h8"}></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
