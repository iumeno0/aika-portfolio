import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <section className="max-xs:px-[20px] relative h-fit w-full bg-neutral px-[40px] py-10 lg:h-screen">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between max-md:flex-col max-md:gap-10 max-md:text-center">
        {/* 左 */}
        <div className="z-40 flex flex-col gap-5 max-md:order-2">
          <div className="text-4xl lg:text-6xl">
            <h1 className="mb-5 font-bold">Aika Oguro&apos;s Portfolio</h1>
            <p className="text-2xl">
              フルスタックエンジニアとして幅広い技術スタックに従事し、さまざまな開発に取り組みます
            </p>
          </div>
          <div>
            <Link href={'#contact'}>
              <button className="cursor-pointer rounded-md bg-secondary px-2 py-1 text-white hover:bg-secondary/75">
                コンタクト
              </button>
            </Link>
          </div>
        </div>

        {/* 右 */}
        <Image
          alt="profile"
          className="z-10 rounded-full"
          height={400}
          src={'/assets/profile.png'}
          width={400}
        />
      </div>
    </section>
  );
};
