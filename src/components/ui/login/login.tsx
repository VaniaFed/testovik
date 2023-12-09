import React from "react";
import classNames from "classnames/bind";

import { Label } from "@/components/ui/typography/label";

import styles from "./login.module.scss";

import type { FC } from "react";
import type { Props } from "./props";
import { Subtitle } from "@/components/ui/typography/subtitle";
import { Link } from "@/components/ui/link";

const cx = classNames.bind(styles);

export const Login: FC<Props> = ({
  loggedIn = false,
  userName,
  userRole,
  className,
}) => {
  return (
    <div className={cx("login", className)}>
      {loggedIn ? (
        <>
          <div className={cx("login__user")}>
            <Label small className={cx("login__role")}>
              {userRole}
            </Label>
            <Label>{userName}</Label>
          </div>
          <Link href="/signout" level="label">
            Выйти
          </Link>
        </>
      ) : (
        <Link href="/signin" level="label">
          Войти
        </Link>
      )}
    </div>
  );
};
