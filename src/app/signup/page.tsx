"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "@/components/ui/modal";
import { Form } from "@/components/ui/form";
import { Heading } from "@/components/ui/typography/heading";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { authApi } from "@/api/auth";

const signUpSchema = yup
  .object({
    username: yup.string().min(3).max(50).required(),
    password: yup.string().min(6).max(50).required(),
    password_confirmation: yup
      .string()
      .min(6)
      .max(50)
      .required()
      .oneOf([yup.ref("password")], "Password does not match!"),
    is_admin: yup.string(),
  })
  .required();

export interface SignUpFields extends yup.InferType<typeof signUpSchema> {}

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: yupResolver<SignUpFields>(signUpSchema),
  });

  const onSubmit = (data: SignUpFields) => {
    authApi.signUp(data);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <Modal header={headerModal} footer={footerModal}>
      <Form id="sign-up-form" onSubmit={onFormSubmit}>
        <Field
          id="form-username"
          label="Логин"
          required
          errMessage={errors.username?.message}
        >
          <Input id="form-username" solid autoFocus {...register("username")} />
        </Field>
        <Field
          id="form-password"
          label="Пароль"
          required
          errMessage={errors.password?.message}
        >
          <Input id="form-password" solid {...register("password")} />
        </Field>
        <Field
          id="form-password-confirmation"
          label="Подтвердите пароль"
          required
          errMessage={errors.password_confirmation?.message}
        >
          <Input
            id="form-password-confirmation"
            solid
            {...register("password_confirmation")}
          />
        </Field>
        <Field
          id="form-is-admin"
          label="Хотите быть админом?"
          errMessage={errors.is_admin?.message}
        >
          <Checkbox id="form-is-admin" {...register("is_admin")}>
            Быть админом
          </Checkbox>
        </Field>
      </Form>
    </Modal>
  );
}
