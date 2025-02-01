'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
export const Header = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header className="fixed flex justify-between px-8 w-screen h-16 items-center border-b border-gray-300 shadow-sm backdrop-blur-md">
      <h1 className="font-bold text-2xl">
        <Link href="/">Studylog</Link>
      </h1>
      <div className="flex gap-3">
        {path !== '/login' ? (
          <Link href="/login">
            <Button variant="link">ログイン</Button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
