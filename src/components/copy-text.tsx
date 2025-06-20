"use client";

import { toast } from "sonner";

import { cn } from "@/lib/utils";

export function CopyText({
  className,
  value,
  message = "Copied to clipboard",
  children,
  ...props
}: {
  value: string;
  message?: string;
} & React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn("cursor-copy", className)}
      onClick={() => {
        navigator.clipboard.writeText(value);
        toast.success(message);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
