import { TitleWithIcon } from '@/components/TitlleWithIcon';
import type { FC } from 'react';

type Props = {};

export const Profile: FC<Props> = () => {
  return (
    <section
      className="max-xs:px-[20px] relative h-fit w-full bg-white px-[40px] py-10"
      id="profile"
    >
      <div className="mx-auto max-w-7xl">
        <TitleWithIcon title="自己紹介" />
        <div>
          <p className="text-lg text-gray-600">
            初めまして。<span className="font-bold">Aika Oguro</span>
            と申します。
            <br />
            Webエンジニアとしては3年目になります（現在2024/2）
            <br />
            バックエンドではCMS・API開発
            フロントエンドではBtoC向けWebサイトや社内管理システム構築などさまざま案件担当して参りました。
            趣味は絵を描くこと・カメラ・読書・映画を見ることです
            <br />
            よろしくお願いします！
          </p>
        </div>
      </div>
    </section>
  );
};
