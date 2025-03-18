// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArchiveFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArchiveFilledIcon(props: ArchiveFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 5a2 2 0 012-2h16a2 2 0 010 4H4a2 2 0 01-2-2zm17 4c.513 0 .936.463.993 1.06l.007.14v7.2c0 1.917-1.249 3.484-2.824 3.594L17 21H7c-1.598 0-2.904-1.499-2.995-3.388L4 17.4v-7.2C4 9.537 4.448 9 5 9h14zm-5 2h-4l-.117.007a1 1 0 000 1.986L10 13h4l.117-.007a1 1 0 000-1.986L14 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArchiveFilledIcon;
/* prettier-ignore-end */
