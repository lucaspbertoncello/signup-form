import type { ReactNode } from "react";

type FormGroup = {
  children: ReactNode;
  error?: string;
};

export default function FormGroup({ children, error }: FormGroup) {
  return (
    <div className="w-[400px]">
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
