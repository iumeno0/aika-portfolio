import { SkillItem } from '@/components/SkillItem';
import { TitleWithIcon } from '@/components/TitlleWithIcon';
import type { FC } from 'react';

type Props = {};

export const Skills: FC<Props> = () => {
  const skillsItems = [
    'HTML',
    'CSS',
    'TypeScript',
    'React',
    'Nextjs',
    'PHP',
    'Laravel',
    'MySQL',
  ];

  return (
    <section
      className="max-xs:px-[20px] relative h-fit w-full bg-white px-[40px] py-10"
      id="skills"
    >
      <div className="mx-auto max-w-7xl">
        <TitleWithIcon title="使用言語・フレームワーク" />
        <div className="max-xs:grid-cols-1 grid grid-cols-2 gap-5 md:grid-cols-4">
          {skillsItems.map((skillName, index) => (
            <SkillItem key={index} skillName={skillName} />
          ))}
        </div>
      </div>
    </section>
  );
};
