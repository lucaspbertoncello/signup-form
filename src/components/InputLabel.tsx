import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputProps = {
  labelText: string;
  inputType: string;
  placeholder?: string;
};

export function InputLabel({ labelText, inputType, placeholder }: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label className="text-slate-600" htmlFor={labelText}>
        {labelText}
      </Label>
      <Input type={inputType} id={labelText} placeholder={placeholder} />
    </div>
  );
}
