import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  skillName: string;
};

export const SkillItem: FC<Props> = ({ skillName }) => {
  const srcName = skillName.toLowerCase();

  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-neutral p-4 text-center">
      <Image
        alt={srcName}
        height={100}
        src={`/assets/skills/icon-${srcName}.svg`}
        width={100}
      />
      <span>{skillName}</span>
    </div>
  );
};
