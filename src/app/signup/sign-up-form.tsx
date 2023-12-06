"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useSignUpForm } from "@/app/signup/use-sign-up-form";

import { axios } from "@/lib/axios";
import { useRouter } from "next/navigation";

import type { FC } from "react";

export const SignUpForm: FC<unknown> = () => {
  const router = useRouter();
  const signUp = async (data) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/signup`, data)
      .then(() => {
        router.push("/");
      })
      .catch((errMessage) => {
        console.warn("error while signing up: ");
        console.warn(errMessage);
      });
  };
  const { register, onSubmit, getValues, errors } = useSignUpForm();
  return (
    <Form
      id="sign-up-form"
      onSubmit={(e) =>
        onSubmit(e, () => {
          signUp(getValues());
        })
      }
    >
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
  );
};
