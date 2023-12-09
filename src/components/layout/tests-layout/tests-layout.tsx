import React from "react";
import classNames from "classnames/bind";

import styles from "./tests-layout.module.scss";

import type { FC } from "react";
import type { Props } from "./props";
import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";

const cx = classNames.bind(styles);

export const TestsLayout: FC<Props> = ({ tests, className }) => {
  return (
    <div className={cx("tests-layout", className)}>
      <Heading size="1">Тесты</Heading>
      {tests.length > 0 ? (
        tests.map((test, key) => <p key={key}>{test.title}</p>)
      ) : (
        <Paragraph>Тестов нет</Paragraph>
      )}
    </div>
  );
};
