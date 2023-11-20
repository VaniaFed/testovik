import React from "react";
import classNames from "classnames/bind";

import styles from "./paragraph.module.scss";

import type { FC } from "react";
import type { Props } from "./props";

const cx = classNames.bind(styles);

export const Paragraph: FC<Props> = ({ children, large, className }) => {
  return (
    <p className={cx("paragraph", large && `paragraph_large`, className)}>
      {children}
    </p>
  );
};
