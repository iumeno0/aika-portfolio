'use client';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenuLine } from 'react-icons/ri';
import { useMenuStore } from '@/store/useMenuStore';
import type { FC } from 'react';

type Props = {};

export const Header: FC<Props> = () => {
  const { isOpen, openMobileMenu } = useMenuStore();

  return (
    <header className="max-xs:px-5 z-10 bg-neutral px-[40px] py-4" id="home">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5">
        {/* 上 */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Link href={'/'}>
            <h1 className="text-3xl font-bold text-primary">
              AIKA&apos;s PORTFOLIO
            </h1>
          </Link>
          {/* トグル */}
          <div className="z-50 text-2xl" onClick={openMobileMenu}>
            {isOpen ? <AiOutlineClose /> : <RiMenuLine />}
          </div>
        </div>
      </div>
    </header>
  );
};
