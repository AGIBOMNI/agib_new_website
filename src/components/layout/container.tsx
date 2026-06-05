import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  overflowVisible?: boolean;
};

export function Container({ children, className = "", overflowVisible = false }: ContainerProps) {
  const overflowClass = overflowVisible ? "overflow-visible" : "overflow-hidden";
  return <div className={`mx-auto w-full max-w-7xl ${overflowClass} px-4 md:px-8 ${className}`}>{children}</div>;
}
