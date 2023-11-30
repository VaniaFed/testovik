import React from "react";
import classNames from "classnames/bind";

import { Label } from "@/components/ui/typography/label";

import styles from "./login.module.scss";

import type { FC } from "react";
import type { Props } from "./props";
import { Subtitle } from "@/components/ui/typography/subtitle";

const cx = classNames.bind(styles);

export const Login: FC<Props> = ({
  loggedIn,
  userName,
  userType,
  className,
}) => {
  return (
    <div className={cx("login", className)}>
      {loggedIn ? (
        <div>
          <Subtitle light>{userType}</Subtitle>
          <Label>{userName}</Label>
        </div>
      ) : (
        <Label>Войти</Label>
      )}
    </div>
  );
};
