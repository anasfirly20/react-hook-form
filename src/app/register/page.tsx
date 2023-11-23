"use client";

// Nextui
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// Miscellaneous

type TInputs = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);

  return (
    <section className="min-h-screen pt-[5rem]">
      <h1 className="text-xl text-center">Registration Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-20 gap-y-10 mt-16"
      >
        <Input
          type="text"
          variant="underlined"
          label="Full Name"
          {...register("fullName", {
            required: true,
          })}
        />
        <Input
          type="email"
          variant="underlined"
          label="Email"
          {...register("email")}
        />
        <Input
          type="password"
          variant="underlined"
          label="Password"
          {...register("password")}
        />
        <Input
          type="password"
          variant="underlined"
          label="RepeatPassword"
          {...register("repeatPassword")}
        />
        <Button
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
