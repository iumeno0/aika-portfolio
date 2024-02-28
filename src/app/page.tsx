import { Contact } from '@/views/Contact';
import { Hero } from '@/views/Hero';
import { Profile } from '@/views/Profile';
import { Skills } from '@/views/Skills';
import { TopButton } from '@/views/TopButton';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skills />
      <Contact />
      <TopButton />
    </>
  );
}
