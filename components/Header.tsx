import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { JSX } from 'react';
import Image from 'next/image';
import { auth, signOut } from '@/auth';
export const Header = async () => {
  const session = await auth();

  let LoginComponent: JSX.Element = (
    <Link href="/login">
      <Button variant="link">ログイン</Button>
    </Link>
  );
  if (session) {
    LoginComponent = (
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <Button variant="link">ログアウト</Button>
      </form>
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
