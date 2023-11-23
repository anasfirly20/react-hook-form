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

const defaultValues = {
  fullName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export default function Register() {
  const {
    register,
    handleSubmit,
    // watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log("SUBMITTED >", data);

  // const { fullName, email, password, repeatPassword } = watch();

  console.log("CHECK RE-RENDER");

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
              // isInvalid={
              //   fullName?.length && errors.fullName?.message ? true : false
              // }
              // errorMessage={
              //   fullName?.length &&
              //   errors.fullName?.message &&
              //   errors.fullName?.message
              // }
              {...field}
            />
          )}
        />
        {/* <Input
          type="text"
          variant="underlined"
          label="Full Name"
          {...(register("fullName"),
          {
            onChange: (e) => console.log("name >", e.target.value),
          })}
          isInvalid={
            fullName?.length && errors.fullName?.message ? true : false
          }
          errorMessage={
            fullName?.length &&
            errors.fullName?.message &&
            errors.fullName?.message
          }
        /> */}
        <Input
          type="email"
          variant="underlined"
          label="Email"
          {...register("email")}
          // isInvalid={email?.length && errors.email?.message ? true : false}
          // errorMessage={
          //   email?.length && errors.email?.message && errors.email?.message
          // }
        />
        <Input
          type="password"
          variant="underlined"
          label="Password"
          {...register("password")}
          // isInvalid={
          //   password?.length && errors.password?.message ? true : false
          // }
          // errorMessage={
          //   password?.length &&
          //   errors.password?.message &&
          //   errors.password?.message
          // }
        />
        <Input
          type="password"
          variant="underlined"
          label="Repeat Password"
          {...register("repeatPassword")}
          // isInvalid={
          //   repeatPassword?.length &&
          //   errors.repeatPassword?.message &&
          //   password !== repeatPassword
          //     ? true
          //     : false
          // }
          // errorMessage={
          //   repeatPassword?.length &&
          //   errors.repeatPassword?.message &&
          //   errors.repeatPassword?.message
          // }
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
