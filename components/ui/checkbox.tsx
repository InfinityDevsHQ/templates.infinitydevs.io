import { cn } from "$/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  pill?: boolean;
  children?: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    { className, pill = false, children, checked, onCheckedChange, ...props },
    ref
  ) => {
    return (
      <>
        {!pill ? (
          <CheckboxPrimitive.Root
            ref={ref}
            checked={checked}
            onCheckedChange={onCheckedChange}
            className={cn(
              "border-border-gray-300 peer h-8 w-8 rounded-md border bg-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
              className
            )}
            {...props}
          >
            <CheckboxPrimitive.Indicator
              className={cn("flex items-center justify-center fill-current")}
            >
              <Check className="h-4 w-4 text-black" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        ) : (
          <CheckboxPrimitive.Root
            ref={ref}
            checked={checked}
            onCheckedChange={onCheckedChange}
            className={cn(
              "peer rounded-md disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          >
            <div
              className={cn(
                "flex max-w-max items-center justify-between px-2 py-1 text-sm font-semibold rounded-full",
                checked
                  ? "!bg-white border-white"
                  : " bg-blue-900/40 common-border"
              )}
              style={{
                boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.05)",
                borderRadius: "100px",
              }}
            >
              <div className={cn(checked ? "gradient-text" : "text-zinc-300")}>
                {children}
              </div>
            </div>
          </CheckboxPrimitive.Root>
        )}
      </>
    );
  }
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
