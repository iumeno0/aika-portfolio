'use client';
import { useState, type FC } from 'react';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { sideMenuLinks, type SideMenuLink } from '@/constants/sideMenuLinks';
import { useMenuStore } from '@/store/useMenuStore';

type Props = {};

export const SideMenu: FC<Props> = () => {
  const { isOpen, closeMobileMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState(sideMenuLinks[0]);
  const handleLinkClick = (link: SideMenuLink) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  return (
    <section
      className={`fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between bg-white px-[20px] py-10 max-lg:max-w-[146px] lg:px-[80px]
${isOpen ? 'max-lg:block' : 'max-md:hidden'}`}
    >
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="mb-10">
          {sideMenuLinks.map((link) => {
            const isActive = activeLink === link;
            return (
              <a
                className={`
                relative flex justify-center rounded-lg p-3
                ${isActive ? 'bg-primary text-white' : ''}
                `}
                href={link.route}
                key={link.label}
                onClick={() => handleLinkClick(link)}
              >
                <p>{link.label}</p>
              </a>
            );
          })}
        </div>
        {/* 下 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-3 flex flex-col items-center gap-4 lg:flex-row ">
            <a
              aria-label="github link"
              className="cursor-pointer rounded-full bg-secondary p-2 text-white hover:bg-secondary/75"
              href="https://github.com/iumeno0"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a
              aria-label="twitter link"
              className="cursor-pointer rounded-full bg-secondary p-2 text-white hover:bg-secondary/75"
              href="https://twitter.com/____iumen"
              target="_blank"
            >
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
