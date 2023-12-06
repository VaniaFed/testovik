import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: yupResolver<SignUpFields>(signUpSchema),
  });

  const onFormSubmit = (e: React.FormEvent, onSubmit: () => void) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return {
    register,
    onSubmit: onFormSubmit,
    getValues,
    errors,
  };
};
