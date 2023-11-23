"use client";

// Nextui
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

// Miscellaneous

export default function Register() {
  return (
    <section className="min-h-screen pt-[5rem]">
      <h1 className="text-xl text-center">Registration Form</h1>
      <form action="" className="grid grid-cols-2 gap-x-20 gap-y-10 mt-16">
        <Input type="fullName" variant="underlined" label="Full Name" />
        <Input type="email" variant="underlined" label="Email" />
        <Input type="password" variant="underlined" label="Password" />
        <Input type="password" variant="underlined" label="RepeatPassword" />
      </form>
      <Button color="primary" className="mt-20 flex w-[30%] mx-auto">
        Sign Up
      </Button>
    </section>
  );
}
