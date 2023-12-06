"use client";

import React from "react";
import { useRouter } from "next/navigation";
import * as yup from "yup";

import { Form } from "@/components/ui/form";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useCustomForm } from "@/hooks/use-custom-form";

import { axios } from "@/lib/axios";

import type { FC } from "react";

export const SignUpForm: FC<unknown> = () => {
  const router = useRouter();
  const signUp = async (data: any) => {
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
  const { register, onSubmit, getValues, errors } = useCustomForm({
    username: yup.string().min(3).max(50).required(),
    password: yup.string().min(6).max(50).required(),
    password_confirmation: yup
      .string()
      .min(6)
      .max(50)
      .required()
      .oneOf([yup.ref("password")], "Password does not match!"),
    is_admin: yup.string(),
  });
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
        errMessage={errors.username?.message as string}
      >
        <Input id="form-username" solid autoFocus {...register("username")} />
      </Field>
      <Field
        id="form-password"
        label="Пароль"
        required
        errMessage={errors.password?.message as string}
      >
        <Input id="form-password" solid {...register("password")} />
      </Field>
      <Field
        id="form-password-confirmation"
        label="Подтвердите пароль"
        required
        errMessage={errors.password_confirmation?.message as string}
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
        errMessage={errors.is_admin?.message as string}
      >
        <Checkbox id="form-is-admin" {...register("is_admin")}>
          Быть админом
        </Checkbox>
      </Field>
    </Form>
  );
};
