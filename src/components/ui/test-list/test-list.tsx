"use client";
import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { axios } from "@/lib/axios";

import styles from "./test-list.module.scss";

import type { FC } from "react";

const cx = classNames.bind(styles);

export const TestList: FC<unknown> = () => {
  return <div className={cx("test-list")}>TESTS</div>;
};
