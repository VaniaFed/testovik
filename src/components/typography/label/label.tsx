import React from "react";
import classNames from "classnames/bind";

import styles from "./label.module.scss";

import type { FC } from "react";
import type { Props } from "./props";

const cx = classNames.bind(styles);

export const Label: FC<Props> = ({ children, size, className }) => {
  return (
    <div className={cx("label", size && `label_${size}`, className)}>
      {children}
    </div>
  );
};
