import React from "react";
import classNames from "classnames/bind";

import styles from "./close-btn.module.scss";

import type { FC } from "react";
import type { Props } from "./props";
import Image from "next/image";

const cx = classNames.bind(styles);

export const CloseBtn: FC<Props> = ({ onClose, className }) => {
  return (
    <Image
      className={cx("close-btn", className)}
      width="30"
      height="30"
      src={"/cross-clear.svg"}
      alt="close"
      onClick={onClose}
    />
  );
};
