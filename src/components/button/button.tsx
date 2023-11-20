import React from "react";
import classNames from "classnames/bind";

import styles from "./button.module.scss";

import type { FC } from "react";
import type { Props } from "./props";

const cx = classNames.bind(styles);

export const Button: FC<Props> = ({ className }) => {
  return <div className={cx("button", className)}>hihihi</div>;
};
