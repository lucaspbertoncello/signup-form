import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { InputHTMLAttributes } from "react";

type InputProps = {
  labelText: string;
  inputType: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputLabel({ labelText, inputType, ...props }: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label className="text-slate-600" htmlFor={labelText}>
        {labelText}
      </Label>
      <Input type={inputType} id={labelText} {...props} />
    </div>
  );
}
