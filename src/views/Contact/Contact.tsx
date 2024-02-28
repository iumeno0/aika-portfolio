import { TitleWithIcon } from '@/components/TitlleWithIcon';
import type { FC } from 'react';

type Props = {};

export const Contact: FC<Props> = () => {
  return (
    <section
      className="max-xs:px-[20px] relative h-fit w-full bg-white px-[40px] py-10"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        <TitleWithIcon title="コンタクト" />
        <div>
          <p>ご連絡先はこちら</p>
          <p>moffu551@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
