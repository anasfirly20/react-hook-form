"use client";

// Nextui
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

// React Hook Form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";

// Miscellaneous

type TInputs = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const defaultValues: TInputs = {
  fullName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("SUBMITTED >", data);

    reset();
  };

  console.log("RE-RENDER");

  return (
    <section className="min-h-screen pt-[5rem]">
      <h1 className="text-xl text-center">Registration Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-20 gap-y-10 mt-16"
      >
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <Input
              variant="underlined"
              label="Full Name"
              isInvalid={errors.fullName?.message ? true : false}
              errorMessage={
                errors.fullName?.message && errors.fullName?.message
              }
              {...field}
            />
          )}
        />
        <Input
          type="email"
          variant="underlined"
          label="Email"
          {...register("email")}
          isInvalid={errors.email?.message ? true : false}
          errorMessage={errors.email?.message && errors.email?.message}
        />
        <Input
          type="password"
          variant="underlined"
          label="Password"
          {...register("password")}
          isInvalid={errors.password?.message ? true : false}
          errorMessage={errors.password?.message && errors.password?.message}
        />
        <Input
          type="password"
          variant="underlined"
          label="Repeat Password"
          {...register("repeatPassword")}
          isInvalid={errors.repeatPassword?.message ? true : false}
          errorMessage={
            errors.repeatPassword?.message && errors.repeatPassword?.message
          }
        />
        <Button
          disabled={isSubmitting}
          isLoading={isSubmitting}
          type="submit"
          color="primary"
          className="mt-10 flex justify-center items-center w-full col-span-2"
        >
          Sign Up
        </Button>
      </form>
    </section>
  );
}
