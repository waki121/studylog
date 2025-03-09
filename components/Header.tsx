import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { auth, signOut } from '@/auth';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { DialogHeader } from './ui/dialog';
import Image from 'next/image';

export const Header = async () => {
  const session = await auth();

  let LoginComponent = (
    <Link href="/login">
      <Button variant="link">ログイン</Button>
    </Link>
  );

  if (session) {
    LoginComponent = (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link">ログアウト</Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>ログアウトしますか？</DialogTitle>
            <DialogDescription>
              また再度ログインすることもできます。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <Button type="submit" className="text-red-500">
                ログアウト
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <header className="fixed flex justify-between px-8 w-screen h-16 items-center border-b border-gray-300 shadow-sm backdrop-blur-md">
      <h1 className="font-bold text-2xl">
        <Link href="/" className="flex">
          <Image src="/logo.svg" width="32" height="32" alt="ロゴ" />
          <span>Studylog</span>
        </Link>
      </h1>
      <div className="flex gap-3">{LoginComponent}</div>
    </header>
  );
};
