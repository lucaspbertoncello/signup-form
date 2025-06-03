import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import FormGroup from "./FormGroup";
import { InputLabel } from "./InputLabel";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const schema = z
  .object({
    firstName: z.string().min(2, "First name must have at least 2 characters"),
    lastName: z.string().min(4, "Last name must have at least 4 characters"),
    phone: z.number({ invalid_type_error: "Invalid phone number" }),
    email: z.string().email("Invalid e-mail"),
    password: z.string().min(4, "Password must have at least 4 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormData = z.infer<typeof schema>;

export default function SignupForm() {
  const { handleSubmit, register, reset, watch, formState } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  const password = watch("password");
  console.log(password);

  return (
    <form className="flex-1">
      <h1 className="text-2xl text-slate-600 font-semibold">Register</h1>
      <h2 className="text-lg text-slate-600 font-semibold mt-14">Smarter studying starts here</h2>
      <p className="text-md text-slate-400 mb-10">Boost your learning with smart flashcards — sign up for free!</p>

      <div className="space-y-8 mb-10">
        <div className="flex gap-4">
          <FormGroup error={formState.errors.firstName?.message}>
            <InputLabel inputType="text" labelText="First Name" {...register("firstName")} />
          </FormGroup>
          <FormGroup error={formState.errors.lastName?.message}>
            <InputLabel inputType="text" labelText="Last name" {...register("lastName")} />
          </FormGroup>
        </div>

        <div className="flex gap-4">
          <FormGroup error={formState.errors.phone?.message}>
            <InputLabel
              inputType="text"
              labelText="Phone number"
              {...register("phone", { setValueAs: (value) => Number(value) })}
            />
          </FormGroup>
          <FormGroup error={formState.errors.email?.message}>
            <InputLabel inputType="text" labelText="E-mail" {...register("email")} />
          </FormGroup>
        </div>

        <div className="flex gap-4">
          <FormGroup error={formState.errors.password?.message}>
            <InputLabel inputType="password" labelText="Password" {...register("password")} />
          </FormGroup>
          <FormGroup error={formState.errors.confirmPassword?.message}>
            <InputLabel inputType="password" labelText="Confirm password" {...register("confirmPassword")} />
          </FormGroup>
        </div>
      </div>

      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2">
          <Checkbox id="emailNews" />
          <Label className="text-slate-400 font-normal" htmlFor="emailNews">
            Yes, i want to receive FlashLearn emails
          </Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label className="text-slate-400 font-normal" htmlFor="terms">
            I agree to all the Term, Privacy Policy and Fees
          </Label>
        </div>
      </div>

      <Button disabled={!formState.isValid} onClick={handleSubmitForm}>
        Create account
      </Button>
    </form>
  );
}
