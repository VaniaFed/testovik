import React from "react";
import classNames from "classnames/bind";

import { BoxContainer } from "@/components/layout/box-container";
import { Logo } from "@/components/ui/logo";
import { Login } from "@/components/ui/login";

import styles from "./header.module.scss";

import type { FC } from "react";
import type { Props } from "./props";

const cx = classNames.bind(styles);

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cx("header", className)}>
      <BoxContainer className={cx("header__container")}>
        <nav className={cx("header__nav")}>
          <Logo href="/" />
          <Login loggedIn={true} userName="vaniafed" userRole="admin" />
        </nav>
      </BoxContainer>
    </header>
  );
};
