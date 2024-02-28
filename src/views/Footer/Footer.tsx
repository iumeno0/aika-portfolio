import type { FC } from 'react';

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <div className="w-full bg-neutral py-2 text-center md:hidden">
      <p>© 2024 ORIGIN.Doc</p>
    </div>
  );
};
