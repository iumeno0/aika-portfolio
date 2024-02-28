import { ReactNode, FC } from 'react';
import { AiFillBulb } from 'react-icons/ai';

type Props = {
  title: string;
  icon?: ReactNode;
};

export const TitleWithIcon: FC<Props> = ({
  title,
  icon: Icon = <AiFillBulb className="size-4" />,
}) => {
  return (
    <div className="mb-10 inline-block">
      <p className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white">
        <span>{Icon}</span>
        {title}
      </p>
    </div>
  );
};
