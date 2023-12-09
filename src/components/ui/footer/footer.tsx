import React from "react";
import classNames from "classnames/bind";

import { BoxContainer } from "@/components/layout/box-container";
import { Logo } from "@/components/ui/logo";

import styles from "./footer.module.scss";

import type { FC } from "react";
import type { Props } from "./props";
import { Paragraph } from "@/components/ui/typography/paragraph";

export const Footer: FC<Props> = ({ className }) => {
  const cx = classNames.bind(styles);

  return (
    <footer className={cx("footer", className)}>
      <BoxContainer>
        <div className={cx("footer__inner")}>
          <Paragraph>Testovik 2023, все права защищены</Paragraph>
        </div>
      </BoxContainer>
    </footer>
  );
};
