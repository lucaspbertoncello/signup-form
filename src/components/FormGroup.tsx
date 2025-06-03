import type { ReactNode } from "react";

type FormGroup = {
  children: ReactNode;
  error?: string;
};

export default function FormGroup({ children, error }: FormGroup) {
  return (
    <div className="max-w-[500px] w-full">
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
