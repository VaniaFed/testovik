import React from "react";

import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography/heading";
import { Form } from "@/components/ui/form";

import { Modal } from "../modal";

import type { FC } from "react";
import type { Props } from "./props";

export const ModalAdd: FC<Props> = ({ onClose, className }) => {
  const header = (
    <>
      <Heading size="2">Добавить книгу</Heading>
    </>
  );

  const footer = (
    <>
      <Button variant="positive" form="add-book-form">
        Добавить
      </Button>
    </>
  );

  const onFormSubmit = () => {
    console.log("submit");
  };

  return (
    <Modal
      header={header}
      footer={footer}
      className={className}
      closeModal={() => {
        onClose();
      }}
    >
      <Form id="add-book-form" onSubmit={onFormSubmit}>
        hi
      </Form>
    </Modal>
  );
};
