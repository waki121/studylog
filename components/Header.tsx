'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { useSession } from 'next-auth/react';
import { JSX } from 'react';
import Image from 'next/image';
export const Header = () => {
  const { data: session, status } = useSession();

  let LoginComponent: JSX.Element = (
    <Link href="/login">
      <Button variant="link">ログイン</Button>
    </Link>
  );
  if (status === 'authenticated') {
    LoginComponent = (
      <div className="flex bg-cyan-100 p-1 border border-gray-600 border-opacity-45 rounded-lg items-center">
        <Image
          src={session.user?.image ?? ''}
          width="32"
          height="32"
          className="rounded-full"
          alt="icon"
        ></Image>
        <p className="px-1">{session.user?.name ?? ''}</p>
      </div>
    );
  }

  return (
    <header className="fixed flex justify-between px-8 w-screen h-16 items-center border-b border-gray-300 shadow-sm backdrop-blur-md">
      <h1 className="font-bold text-2xl">
        <Link href="/">Studylog</Link>
      </h1>
      <div className="flex gap-3">{LoginComponent}</div>
    </header>
  );
};
