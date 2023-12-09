import React from "react";
import { SignUpForm } from "@/app/signup/sign-up-form";
import { Modal } from "@/components/ui/modal";
import { Heading } from "@/components/ui/typography/heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

const headerModal = (
  <>
    <Heading size="1">Регистрация</Heading>
  </>
);

const footerModal = (
  <>
    <Button variant="accent" form="sign-up-form">
      Зарегистрироваться
    </Button>
    <Link href="/signin" level="label">
      Войти
    </Link>
  </>
);

export default function SignUpPage() {
  return (
    <Modal header={headerModal} footer={footerModal}>
      <SignUpForm />
    </Modal>
  );
}
