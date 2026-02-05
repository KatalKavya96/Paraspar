import { clsx } from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:cursor-pointer",
        variant === "primary" &&
          "bg-brand text-white shadow-soft hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/30",
        variant === "ghost" &&
          "bg-transparent text-text hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/10",
        className
      )}
      {...props}
    />
  );
}
