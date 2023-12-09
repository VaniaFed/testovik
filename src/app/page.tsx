"use client";

import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";

import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { TestsLayout } from "@/components/layout/tests-layout/tests-layout";
import { ModalAddTest } from "@/components/ui/modal";

import { useModal } from "@/hooks/use-modal";
import { axios } from "@/lib/axios";
import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { Test, TestDetails } from "@/lib/definitions";

import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";

const cx = classNames.bind(styles);

export default function TestsPage() {
  // TODO: ВЫНЕСТИ В КЛИЕНТСКИЙ КОМПОНЕНТ, А ЭТОТ ОСТАВИТЬ СЕРВЕРНЫМ

  const fetchAllTests = useCallback(async () => {
    const tests = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tests/`);
    return tests.data;
  }, []);

  const [tests, setTests] = useState<{
    list: Test[];
    meta: TestDetails;
  }>();
  const { isModalShown, showModal, hideModal } = useModal(false);

  useEffect(() => {
    fetchAllTests().then(
      ({
        data,
      }: {
        data: {
          list: Test[];
          meta: TestDetails;
        };
      }) => {
        console.log("hi");

        console.log(data);
        setTests((prev) => ({
          ...prev,
          ...data,
        }));
      }
    );
  }, [fetchAllTests]);

  return (
    <div className={cx("tests-page")}>
      <div className={cx("tests-page__content")}>
        <div className={cx("tests-page__filter")}>
          <Heading size="3">Найти тест</Heading>
          <Input placeholder="География" />
        </div>
        <Heading size="1">Тесты</Heading>
        <div className={cx("tests-page__list")}>
          {tests && tests.list && tests.list.length > 0 ? (
            tests.list.map((test, key) => <p key={key}>{test.title}</p>)
          ) : (
            <Paragraph>Тестов нет</Paragraph>
          )}
        </div>
      </div>
      <Panel>
        <Button variant="accent" onClick={showModal}>
          Добавить тест
        </Button>
      </Panel>
      {isModalShown && <ModalAddTest closable onClose={hideModal} />}
    </div>
  );
}
