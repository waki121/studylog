import Link from 'next/link';
import { Button } from './ui/button';
export const Header = () => {
  return (
    <header className="fixed flex justify-between px-8 w-screen h-16 items-center border-b border-gray-300 shadow-sm backdrop-blur-md">
      <h1 className="font-bold text-2xl">Studylog</h1>
      <div className="flex gap-3">
        <Link href="/signup">
          <Button variant="link">ログイン</Button>
        </Link>
      </div>
    </header>
  );
};
