import FormGroup from "./FormGroup";
import { InputLabel } from "./InputLabel";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function SignupForm() {
  return (
    <form className="flex-1">
      <h1 className="text-2xl text-slate-600 font-semibold">Register</h1>
      <h2 className="text-lg text-slate-600 font-semibold mt-14">Smarter studying starts here</h2>
      <p className="text-md text-slate-400 mb-10">Boost your learning with smart flashcards — sign up for free!</p>

      <div className="space-y-8 mb-10">
        <div className="flex gap-4">
          <FormGroup>
            <InputLabel inputType="text" labelText="First Name" />
          </FormGroup>
          <FormGroup>
            <InputLabel inputType="text" labelText="Last name" />
          </FormGroup>
        </div>

        <div className="flex gap-4">
          <FormGroup>
            <InputLabel inputType="text" labelText="Phone number" />
          </FormGroup>
          <FormGroup>
            <InputLabel inputType="text" labelText="E-mail" />
          </FormGroup>
        </div>

        <div className="flex gap-4">
          <FormGroup>
            <InputLabel inputType="password" labelText="Password" />
          </FormGroup>
          <FormGroup>
            <InputLabel inputType="password" labelText="Confirm password" />
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

      <Button>Create account</Button>
    </form>
  );
}
