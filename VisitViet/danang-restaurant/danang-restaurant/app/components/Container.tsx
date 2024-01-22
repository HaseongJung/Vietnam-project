import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  customClass?: string;
};

export const Container = ({
  children,
  customClass = '',
}: ContainerProps) => (
  <div className={['w-full min-h-screen mx-auto p-2 md:py-5 md:px-4 md:h-screen', customClass].join(' ')}>
    {children}
  </div>
);
