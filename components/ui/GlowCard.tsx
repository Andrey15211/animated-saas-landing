import type { HTMLAttributes } from "react";

export function GlowCard({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`glow-card ${className}`} {...props} />;
}
