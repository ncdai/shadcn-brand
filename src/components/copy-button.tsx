"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export function CopyButton({
  className,
  value,
  onClick,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
}) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 1500);
  }, [hasCopied]);

  return (
    <Button
      className={cn("size-6 rounded-md", className)}
      size="icon"
      variant="secondary"
      onClick={(event) => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
        onClick?.(event);
      }}
      {...props}
    >
      {hasCopied ? (
        <CheckIcon className="size-3" />
      ) : (
        <ClipboardIcon className="size-3" />
      )}
      <span className="sr-only">Copy</span>
    </Button>
  );
}
