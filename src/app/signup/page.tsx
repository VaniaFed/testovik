import React from "react";
import { Modal } from "@/components/ui/modal";
import { Heading } from "@/components/ui/typography/heading";
import { Button } from "@/components/ui/button";
import { SignUpForm } from "@/app/signup/sign-up-form";

const headerModal = (
  <>
    <Heading size="2">Регистрация</Heading>
  </>
);

const footerModal = (
  <>
    <Button variant="positive" form="sign-up-form">
      Зарегистрироваться
    </Button>
  </>
);

export default function SignUpPage() {
  return (
    <Modal header={headerModal} footer={footerModal}>
      <SignUpForm />
    </Modal>
  );
}
